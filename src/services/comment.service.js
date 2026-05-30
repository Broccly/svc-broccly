const Comment = require('../models/comment.model')
const Post = require('../models/post.model')
const User = require('../models/user.model')

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

exports.getByPost = async(postId) => {
  if(!postId) throw new Error("Post ID is required");
  const comments = await Comment.find({ post: postId }).sort({ updated_at: -1 });
  const authorIds = [...new Set(comments.map(c => c.author))];
  const users = await User.find({ _id: { $in: authorIds } }).select('name avatarUrl');
  const userMap = Object.fromEntries(users.map(u => [u._id.toString(), u]));
  return comments.map(c => {
    const u = userMap[c.author];
    return { ...c.toObject(), authorName: u ? u.name : c.author, authorAvatarUrl: u ? u.avatarUrl : null };
  });
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