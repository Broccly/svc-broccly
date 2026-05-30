const FollowService = require('../services/follow.service')
exports.Follow = async (req, res) => {
  try{
    const result = await FollowService.Follow(req.body);

    res.status(200).json({
      message: "Followed successfully",
      result
    })
  }catch(err){
    res.status(400).json({
      error: err.message
    })
  }
}

exports.CheckFollow = async (req, res) => {
  try {
    const { follower, following_to } = req.query;
    const result = await FollowService.CheckFollow({ follower, following_to });
    res.status(200).json(result);
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
}

exports.Unfollow = async (req, res) => {
  try{
    const { id } = req.params;
    const result = await FollowService.Unfollow({id: id})

    res.status(200).json({
      message: "Unfollowed successfully",
      result
    })
  }catch(err){
    res.status(400).json({
      error: err.message
    })
  }
}