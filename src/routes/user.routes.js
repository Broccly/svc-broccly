const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const isAuthenticated = require('../middleware/isAuthenticated')

router.get('/me', isAuthenticated, userController.getMe)

module.exports = router
