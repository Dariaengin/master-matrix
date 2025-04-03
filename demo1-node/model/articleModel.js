const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
      minlength: 25,
      required: true,
    }
  }

);

module.exports = mongoose.model('article', articleSchema);

 