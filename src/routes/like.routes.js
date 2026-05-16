const likeController = require('../controllers/like.controller')
const express = require('express');
const router = express.Router()

router.post('/create', likeController.Like)
router.delete('/:id', likeController.DisLike)

module.exports = router