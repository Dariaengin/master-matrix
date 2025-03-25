
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const DB_URL = process.env.MONGO_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('✅ DB is connected');
  })
  .catch((err) => {
    console.log('❌ MongoDB connection error: ', err);
  });
