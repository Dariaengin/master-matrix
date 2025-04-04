const express = require('express');
const postController = require('../controller/postController');//link controller
const commentController = require('../controller/commentController');//link comment controller
const route = express.Router();//call express function for routing

route.get('/', postController.homePage);//web route for homepage
route.get('/*', postController.notFoundPage);//web route for 404 page
route.post('/delete/post/:postId', postController.deletePost);//web route for post deletion
route.post('/edit-form/:postId', postController.editPostForm);//web route for edit form
route.post('/update/post/:postId', postController.updatePost);//web route for post update

route.post('/post/add/new-comment/:postId', commentController.addComment);//web route  for adding new comment
route.post(
  '/delete/post/comment/:commentId/:postId',
  commentController.deleteComment
);//web route for deleting a comment
route.post('/add-new-post', postController.addNewPost);//web route  for adding new post


module.exports = route;//export the routes so we can use it in app.js