const express = require('express');
const cors = require('cors')
const app = express()
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const likRouter = require('./routes/like.routes')
const commentRouter = require('./routes/comment.route')
const followRouter = require('./routes/follow.routes')
const userRouter = require('./routes/user.routes')

app.use(cors({ origin: process.env.UI_URL || 'http://localhost:3000', credentials: true }))
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)
app.use('/api/like', likRouter)
app.use('/api/comment', commentRouter)
app.use('/api/follow', followRouter)
app.use('/api/user', userRouter)

module.exports = app;