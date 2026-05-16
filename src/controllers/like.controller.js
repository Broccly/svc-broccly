const likeService = require('../services/like.service')
exports.Like = async (req, res) => {
  try{
    const like = await likeService.Like(req.body)
    res.status(201).json({
      message: "Post liked successfully",
      like
    })
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

exports.DisLike = async (req, res) => {
  try{
    const { id } = req.params
    
    const result = await likeService.DisLike({_id: id, post: req.body})

    res.status(201).json({
      message: "Post dis liked successfully",
      result
    })
  }catch(err){
    res.status(400).json({error: err.message})
  }
}