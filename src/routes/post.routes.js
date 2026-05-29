const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')
const isAuthenticated = require('../middleware/isAuthenticated')

router.get('/', postController.getAllPosts)
router.post('/create',isAuthenticated, postController.createPost);
router.get('/:id', postController.getPostById)
router.delete('/:id', isAuthenticated, postController.deletePost)
router.put('/:id', isAuthenticated, postController.updatePost)

module.exports = router
