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