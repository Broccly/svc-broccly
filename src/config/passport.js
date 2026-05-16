const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/user.model')

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || '/api/auth/google/callback'
}, async(accessToken, refreshToken, profile, done) => {
  const email = profile.emails[0].value

  let user = await User.findOne({ email })

  if(!user) {
    user = await User.create({
      name: profile.displayName,
      email: email,
      password: 'google-oauth',
      bio: 'testing'
    })
  }

  return done(null, user)
}))

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user)
})

