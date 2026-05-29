const FollowController = require('../controllers/follow.controller')
const express = require('express')
const router = express.Router()


router.post('/create', isAuthenticated, FollowController.Follow)
router.delete('/:id', isAuthenticated, FollowController.Unfollow)

module.exports = router;
