const commentController = require('../controllers/comment.controller')
const express = require('express');
const router = express.Router();

router.post('/create', isAuthenticated, commentController.createComment)
router.put('/edit', isAuthenticated, commentController.updateComment)
router.delete('/:id', isAuthenticated, commentController.deleteComment)

module.exports = router;