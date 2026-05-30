const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'broccly-dev-secret'
const ACCESS_TTL = 60 * 60        // 1 hour
const REFRESH_TTL = 7 * 24 * 3600 // 7 days

exports.verifyGoogleToken = async (googleToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo`,
    { headers: { Authorization: `Bearer ${googleToken}` } }
  )
  if (!response.ok) throw new Error('Invalid Google token')

  const { email, name, picture, sub: googleId } = await response.json()

  let user = await User.findOne({ email })
  if (!user) {
    user = await User.create({
      name,
      email,
      bio: 'user bio',
      password: 'google-oauth',
      follower: 0,
      following: 0,
      avatarUrl: picture ?? null,
    })
  } else if (user.avatarUrl !== picture) {
    user.avatarUrl = picture ?? null
    await user.save()
  }

  const payload = { sub: user._id.toString(), role: user.role || 'user' }
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_TTL })
  const refreshToken = jwt.sign({ sub: payload.sub }, JWT_SECRET, { expiresIn: REFRESH_TTL })

  return { accessToken, refreshToken }
}

exports.createAccount = async (data) => {
  console.log('reached at auth service')
  console.log(data)
  const {name, email, password, bio} = data;

  //input validation
  if(!name || !email || !password){
    throw new Error("All fields are required");
  }

  // check existing user
  const existingUser = await User.findOne({email});
  if(existingUser){
    throw new Error("User already exist");
  }

  const user = await User.create({
    name, email, password, bio, follower: 0, following: 0
  })

  return user;
}

exports.deleteAccount = async (data) => {
  const {_id} = data;

  if(!_id){
    throw new Error("Required data is missing")
  }

  const result = User.deleteOne({_id });

  if((await result).deletedCount === 0){
    throw new Error("User not found to delete")
  }
  return result;
}