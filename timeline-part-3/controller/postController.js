
const postModel = require('../models/postModel');
const commentModel = require('../models/commentModel');

const homePage = (req, res) => {
  postModel
    .find()//Fetches all posts from the MongoDB posts collection.
    .sort({ createdAt: -1 })//Sorts posts in descending order by their createdAt timestamp (newest first).
    .populate('comments', '_id comment')//Replaces the ObjectId in comments with the actual comment documents.
    .then((posts) => {
      res.render('homepage', {
        postList: posts,//Passes array of posts and two null values for error messages.
        errPostLength: null,
        errCommentLength: null,
      });
    })
    .catch((err) => {
      console.log('Error fetching posts:', err);
      res.status(500).send('Internal Server Error');
    });
};

const addNewPost = (req, res) => {//Creates a new post instance from the form data
  let newPost = new postModel(req.body);
  newPost
    .save()//Tries to insert the new post into MongoDB.
    .then(() => {
      res.redirect('/');//Redirects to /, which re-renders the homepage.
    })
    .catch((err) => {
      // console.log(err.errors.message.kind);
      if (err && err.errors.message.kind === 'minlength') {//Checks minlength
        postModel
          .find()
          .then((posts) => {
            res.render('homepage', {//Refetches all posts
              postList: posts,      // Renders the homepage again
              errPostLength: 'Min length of the message should be over than 25',  // Sends back an error message string for errPostLength
              errCommentLength: null,
            });
          })
          .catch((err) => {
            console.log('Error fetching posts:', err);
            res.status(500).send('Internal Server Error');
          });
      }
    });
};

const deletePost = (req, res) => {
  let postId = req.params.postId;
  postModel
    .findByIdAndDelete(postId)
    .then(() => {
      return commentModel.deleteMany({ post: postId }); // Delete all comments related to the post
    })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
};

const updatePost = (req, res) => {
  // Get post info from DB
  postModel
    .findById(req.params.postId)
    .then((post) => {
      res.render('edit-post-form', {
        post,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const editPostForm = (req, res) => {
  postModel
    .findByIdAndUpdate(req.params.postId, req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

const notFoundPage = (req, res) => {
  res.render('404page');
};

module.exports = {
  homePage,
  addNewPost,
  deletePost,
  updatePost,
  editPostForm,
  notFoundPage,
};
