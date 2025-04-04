const dotenv = require('dotenv');//add .env file where is store db link and password
dotenv.config();//this will load the environment variables from .env into process.env
const mongoose = require('mongoose');//call mongoose
const DB_URI= process.env.MONGO_URI; //link to our DB
mongoose.connect(process.env.MONGO_URI)// connect to DB
mongoose
  .connect(DB_URI)
  .then(() => {//if connected 
    console.log('DB is connected');
  })
  .catch((err) => {//iif not connected throw error
    console.log(' MongoDB connection error: ', err);
  });