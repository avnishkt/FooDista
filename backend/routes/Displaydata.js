const express = require('express');
const fooduser = require('../models/user');
const routerf = express.Router();

routerf.post('/foodData',(req,res)=>{
    try{
        res.send([global.food_items,global.food_catogry])
    }catch(error){
        console.error(error.message);
        res.send(error);

    }
})
module.exports = routerf;