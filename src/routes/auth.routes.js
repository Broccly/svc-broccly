const passport = require('passport')
const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth.controller')

// Step 1: Redirect user to Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// Step 2: Google calls this after user approves
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login-failed' }),
  (req, res) => {
    res.json({ message: 'Logged in!', user: req.user })
  }
)

router.post('/register', authController.createAccount)
router.delete('/:id', authController.deleteAccount)

module.exports = router