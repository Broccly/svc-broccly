const FollowController = require('../controllers/follow.controller')
const express = require('express')
const router = express.Router()


router.post('/create', FollowController.Follow)
router.delete('/:id', FollowController.Unfollow)

module.exports = router;
