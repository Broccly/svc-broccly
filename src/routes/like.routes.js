const likeController = require('../controllers/like.controller')
const express = require('express');
const router = express.Router()
const isAuthenticated = require('../middleware/isAuthenticated')

router.post('/create', isAuthenticated, likeController.Like)
router.delete('/:id', isAuthenticated, likeController.DisLike)

module.exports = router