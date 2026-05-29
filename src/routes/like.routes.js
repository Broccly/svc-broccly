const likeController = require('../controllers/like.controller')
const express = require('express');
const router = express.Router()

router.post('/create', isAuthenticated, likeController.Like)
router.delete('/:id', isAuthenticated, likeController.DisLike)

module.exports = router