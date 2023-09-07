const express = require('express');
const fooduser = require('../models/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');




router.post('/createuser', [
  body('email', 'incorrect email format').isEmail(),
  body('password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
const salt= await bcrypt.genSalt(10);
let secPassword= await bcrypt.hash(req.body.password,salt)

  try {
    await fooduser.create({
      name: req.body.name,
      email: req.body.email,
      password: secPassword,
      location: req.body.location
    });
    res.json({ sucess: true });
  } catch (err) {
    console.error(err);
    res.json({ sucess: false });
  }
});

router.post('/loginuser', [
  body('email', 'incorrect email format').isEmail(),
  body('password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const userData = await fooduser.findOne({ email });

    const pwdCompare =await bcrypt.compare(req.body.password,userData.password)

    if (!userData || !pwdCompare) {
      return res.status(400).json({ errors: "Try logging in with correct credentials" });
    }
    const data ={ 
        user:{
            id:userData.id
        }
    }
    const authToken=jwt.sign(data,process.env.JWT_SECRET)

    return res.json({ sucess: true,authToken:authToken });
  } catch (err) {
    console.error(err);
    res.json({ sucess: false });
  }
});

module.exports = router;
