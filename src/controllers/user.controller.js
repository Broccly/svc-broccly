const User = require('../models/user.model')

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.sub).select('name email avatarUrl')
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.status(200).json({ user })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
