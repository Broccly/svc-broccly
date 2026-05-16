const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

exports.createComment = async(data) => {
  const { post, author, text } = data

  if(!post || !author || !text){
    throw new Error("All data are required")
  }

  const result = await Comment.create({post: post, author: author, text: text})
  const current_comment = await Post.findOne({_id: post}, {comments: 1})
  const result2 = await Post.updateOne({_id: post}, {comments: current_comment.comments + 1})

  return {result, result2};
}

exports.deleteComment = async(data) => {
  const { id } = data;

  if(!id){
    throw new Error("Comment ID is requiredw")
  }

  const old_comment = await Comment.findOne({_id: id});
  if(!old_comment){
    throw new Error("Comment not found")
  }
  const result = await Comment.deleteOne({_id: id})
  return result;
}

exports.updateComment = async(data) => {
  const { comment, text } = data;

  if(!comment || !text){
    throw new Error("All data are required") 
  }
  const old_comment = await Comment.findOne({_id: comment});
  if(!old_comment){
    throw new Error("Comment not found")
  }
  const result = await Comment.updateOne({_id: comment}, {text: text});

  return result;
}