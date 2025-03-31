const express = require('express');
const postController = require('../controller/postController');
const commentController = require('../controller/commentController');
const route = express.Router();

route.get('/', postController.homePage);
route.get('/*', postController.notFoundPage);
route.delete('/delete/post/:postId', postController.deletePost);
route.post('/edit-form/:postId', postController.editPostForm);
route.patch('/update/post/:postId', postController.updatePost);

route.post('/post/add/new-comment/:postId', commentController.addComment);
route.delete(
  '/delete/post/comment/:commentId/:postId',
  commentController.deleteComment
);
route.post('/add-new-post', postController.addNewPost);


module.exports = route;