const commentController = require('../controllers/comment.controller')
const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated')

router.get('/post/:postId', commentController.getByPost)
router.post('/create', isAuthenticated, commentController.createComment)
router.put('/edit', isAuthenticated, commentController.updateComment)
router.delete('/:id', isAuthenticated, commentController.deleteComment)

module.exports = router;