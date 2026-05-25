const postService = require('../services/post.service')

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id)
    res.status(200).json({ post })
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts({ author: req.query.author })
    res.status(200).json({ posts })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.createPost = async (req, res) => {
  try{
    const post = await postService.createPost(req.body);

    res.status(201).json({
      message: "Post Created successfully",
      post
    })

  }catch(err){
    res.status(400).json({error: err.message})
  }
}

exports.deletePost = async (req, res) => {
  try{
    const { id } = req.params; 
    const post = await postService.deletePost({_id: id})

    res.status(201).json({
      message: "Post deleted successfully",
      post
    })

  }catch(err){
    res.status(400).json({error: err.message})
  }
}

exports.updatePost = async (req, res) => {
  try{
    const { id } = req.params
    const post = await postService.updatePost({_id: id, body: req.body})

    res.status(201).json({
      message: "Post updated successfully",
      post
    })
  }catch(err){
    res.status(400).json({error: err.message})
  }
}