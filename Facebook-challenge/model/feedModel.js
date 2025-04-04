const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 15,
    },
    content: {
      type: String,
      minlength: 10,
      required: true,
    }
  },
  { timestamps: true }

);

module.exports = mongoose.model('feed', feedSchema);

 