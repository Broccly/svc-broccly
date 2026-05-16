const Like = require('../models/like.model')
const Post = require('../models/post.model')
exports.Like = async (data) => {
  const {post, author} = data;

  if(!post || !author){
    throw new Error("All data are required")
  }

  const result = await Like.create({post: post, author: author})
  const current_like = await Post.findOne({_id: post}, {likes: 1})
  const result2 = await Post.updateOne({_id: post}, {likes: current_like.likes + 1})

  return {result, result2}
}

exports.DisLike = async(data) => {
  const {_id, post} = data;

  if(!post || !_id){
    throw new Error("All data are required")
  }

  const result = await Like.deleteOne({_id})
  const current_like = await Post.findOne({_id: post.post}, {likes: 1})
  const result2 = await Post.updateOne({_id: post.post}, {likes: current_like.likes - 1})
  
  return {result, result2}
}