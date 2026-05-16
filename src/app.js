const express = require('express');
const app = express()
const session = require('express-session')
const passport = require('passport')
require('./config/passport')
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const likRouter = require('./routes/like.routes')
const commentRouter = require('./routes/comment.route')
const followRouter = require('./routes/follow.routes')

app.use(session({
  secret: 'replace-secret-key',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)
app.use('/api/like', likRouter)
app.use('/api/comment', commentRouter)
app.use('/api/follow', followRouter)

module.exports = app;