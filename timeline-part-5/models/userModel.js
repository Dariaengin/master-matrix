const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email:
    {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,

    }
  }
);

module.exports = mongoose.model('user', userSchema);
