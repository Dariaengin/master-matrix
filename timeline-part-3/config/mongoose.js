const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const DB_URI= process.env.MONGO_URI;

mongoose.connect(process.env.MONGO_URI)

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('DB is connected');
  })
  .catch((err) => {
    console.log(' MongoDB connection error: ', err);
  });