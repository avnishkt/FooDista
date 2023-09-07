const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    const fetchedData = await mongoose.connection.db.collection('food_items').find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection('food_catogry').find({}).toArray();
    
    global.food_items = fetchedData;
    global.food_catogry = foodCategory;

    console.log("Connected");
  } catch (err) {
    console.log("Not connected", err);
  }
};

module.exports = connectDatabase;
