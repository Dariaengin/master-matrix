// controller/postApiController.js
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// GET all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('comments');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

// GET single post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('comments');
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// CREATE post
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    if (err.errors?.message?.kind === 'minlength') {
      res.status(400).json({ error: 'Post message too short (min 25 chars)' });
    } else {
      res.status(500).json({ error: 'Failed to create post' });
    }
  }
};

// UPDATE post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    await Comment.deleteMany({ post: req.params.id });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};
