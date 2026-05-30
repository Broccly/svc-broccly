const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  avatarUrl: {
    type: String,
    required: false,
    default: null
  },
  follower: {
    type: Number,
    default: 0
  },
  following: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
}, { timestamps: true});

module.exports = mongoose.model("User", userSchema)