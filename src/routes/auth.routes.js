const express = require('express')
const router = express.Router();
const authController = require('../controllers/auth.controller')

// Exchange a Google ID token for app JWTs
router.post('/token', authController.verifyGoogleToken)

router.post('/register', authController.createAccount)
router.delete('/:id', authController.deleteAccount)

module.exports = router