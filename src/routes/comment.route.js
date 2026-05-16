const commentController = require('../controllers/comment.controller')
const express = require('express');
const router = express.Router();

router.post('/create', commentController.createComment)
router.put('/edit', commentController.updateComment)
router.delete('/:id', commentController.deleteComment)

module.exports = router;