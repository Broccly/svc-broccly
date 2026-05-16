const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')
const isAuthenticated = require('../middleware/isAuthenticated')

router.get('/', isAuthenticated, postController.getAllPosts)
router.post('/create', postController.createPost);
router.delete('/:id', isAuthenticated, postController.deletePost)
router.put('/:id', postController.updatePost)

module.exports = router