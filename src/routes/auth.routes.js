const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth.controller')
const isAuthenticated = require('../middleware/isAuthenticated')

// Exchange a Google ID token for app JWTs
router.post('/token', authController.verifyGoogleToken)

router.post('/register', authController.createAccount)
router.delete('/:id', isAuthenticated, authController.deleteAccount)

module.exports = router