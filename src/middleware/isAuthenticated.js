function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).json({ error: "Users must be authenticated" })
}

module.exports = isAuthenticated