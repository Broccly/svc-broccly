const Post = require('../models/post.model')
const User = require('../models/user.model')

exports.createPost = async (data) => {
  const {title, body, author } = data;

  if(!title || !body || !author){
    throw new Error("All data required");
  }

  const post = await Post.create({
    title, body, author, likes: 0, comments: 0, updated_at: Date.now()
  })

  return post;
}

exports.deletePost = async(data) => {
  const { _id } = data

  if(!_id){
    throw new Error("Id is required to delete the post")
  }

  const result = await Post.deleteOne({_id})
  if(result.deleteCount === 0){
    throw new Error("No posts found to delete")
  }

  return result
}

exports.getPostById = async (id) => {
  const post = await Post.findById(id)
  if (!post) throw new Error("Post not found")
  const postObj = post.toObject()
  const user = await User.findById(postObj.author).select('name avatarUrl')
  postObj.authorName = user ? user.name : postObj.author
  postObj.authorAvatarUrl = user ? user.avatarUrl : null
  return postObj
}

exports.getAllPosts = async ({ author } = {}) => {
  const query = author ? { author } : {};
  const posts = await Post.find(query)
  const authorIds = [...new Set(posts.map(p => p.author))]
  const users = await User.find({ _id: { $in: authorIds } }).select('name avatarUrl')
  const userMap = Object.fromEntries(users.map(u => [u._id.toString(), u]))
  return posts.map(p => {
    const obj = p.toObject()
    const u = userMap[obj.author]
    obj.authorName = u ? u.name : obj.author
    obj.authorAvatarUrl = u ? u.avatarUrl : null
    return obj
  })
}

exports.updatePost = async(data) => {
  const { _id, body } = data

  if(!_id || !body){
    throw new Error("Pass the post id you want to delete")
  }
  console.log(body)
  const post = await Post.updateOne({_id}, body)

  return post

}