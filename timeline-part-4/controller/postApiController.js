// controller/postApiController.js
const Post = require('../models/postModel');//require DB json model for post
const Comment = require('../models/commentModel');//require DB json model for comment

// GET all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('comments');//Looks for all documents (posts) in DB, returns an array of posts and replaces those ObjectIds with the actual comment 
    
  } catch (err) {//If there's an error (like a DB connection issue)throw error
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

// GET single post
exports.getPostById = async (req, res) => {//Define an async controller function called getPostById
  try {
    const post = await Post.findById(req.params.id).populate('comments');//I get the id from the route param: req.params.id, find single post by that ID in DB and replaces ObjectIds with full documents
    if (!post) return res.status(404).json({ error: 'Post not found' });//If no post is found (e.g., wrong ID or deleted), send back 404
    res.status(200).json(post);//If the post is found, return 200
  } catch (err) {
    res.status(500).json({ error: 'Server error' });//If any error happens (e.g. database problem or invalid ID format):
  }
};

// CREATE post
exports.createPost = async (req, res) => {//createPost for handling POST method
  try {
    const newPost = new Post(req.body);//create a new instance of the Post model.
    const savedPost = await newPost.save();//save the new post into DB
    res.status(201).json(savedPost);//if 200 The full saved post in JSON


  } catch (err) {
    if (err.errors?.message?.kind === 'minlength') {//handle minLength validation on the message field


      res.status(400).json({ error: 'Post message too short (min 25 chars)' });
    } else {
      res.status(500).json({ error: 'Failed to create post' });
    }
  }
};

// UPDATE post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {//req.params.id → gets the :id from the route //req.body → contains the updated data
      new: true,
      runValidators: true
    });
    if (!post) return res.status(404).json({ error: 'Post not found' });//If no post is found (e.g. wrong ID), it sends a 404 Not Found
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);//This looks for the post with the ID in the URL an deletes it
    if (!post) return res.status(404).json({ error: 'Post not found' });

    await Comment.deleteMany({ post: req.params.id });//Deletes all comments that reference this post by its post field
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};
