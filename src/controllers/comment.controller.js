const commentService = require('../services/comment.service')
exports.createComment = async (req, res) => {
  try{
    console.log('creating comment in controller')
    const result = await commentService.createComment(req.body);

    res.status(200).json({
      message: "Comment created successfully",
      result
    })
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

exports.deleteComment = async (req, res) => {
  try{
    const {id} = await req.params;
    const result = await commentService.deleteComment({id: id})

    res.status(200).json({
      message: "Comment deleted successfully",
      result
    })
  }catch(err){
    res.status(400).json({
      error: err.message
    })
  }
}

exports.updateComment = async (req, res) => {
  try{
  const result = await commentService.updateComment(req.body);
  res.status(200).json({
    message: "Comment updated successfully",
    result
  })

  }catch(err){
    res.status(400).json({
      message: "Erorr updating comment",
      error: err.message
    })
  }
  
}