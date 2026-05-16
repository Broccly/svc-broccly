const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  post: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Comment", commentSchema)