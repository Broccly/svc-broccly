const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({
  post: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Like", likeSchema);