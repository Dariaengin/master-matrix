const express = require('express');//we need to call express
const router = express.Router();//function of express
const postApi = require('../controller/postApiController'); // JSON controller

// REST API endpoints
router.get('/post', postApi.getAllPosts); //goes to app.js and takes api prefix so while testing the route i should write'/api/post'
router.get('/post/:id', postApi.getPostById);
router.post('/post', postApi.createPost);
router.put('/post/:id', postApi.updatePost);
router.delete('/post/:id', postApi.deletePost);

module.exports = router;//we need to export the router so we can use it in app.js