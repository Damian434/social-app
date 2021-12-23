const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: Date,
});


module.exports = mongoose.model('Post', postSchema);

