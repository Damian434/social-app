const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: Date,
});


module.exports = mongoose.model('Post', postSchema);

