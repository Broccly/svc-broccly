const mongoose = require('mongoose')

const followSchema = mongoose.Schema({
  follower: {
    type: String,
    required: true
  },
  following_to: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Follow', followSchema)