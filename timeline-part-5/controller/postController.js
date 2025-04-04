
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
// req and res are ready to use objects of express
// req is the request object and res is the response object
// req.body is the data we get from the form
// res.render is used to render the view
// res.redirect is used to redirect to another page
// res.status is used to set the status code of the response
// res.send is used to send the response back to the client
const addNewPost = (req, res) => {//Creates a new post instance from the form data
  let newPost = new postModel(req.body);//reading the body of the request
  console.log(newPost);
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
              postList: posts,      // sending the post list with posts to the screen
              errPostLength: 'Min length of the message should be over than 25',  // Sends back an error message string for errPostLength
              errCommentLength: null,
            });
          })
          .catch((err) => {
            console.log('Error fetching posts:', err);
            res.status(500).send('Internal Server Error');
          });
      } else if (err && err.errors.message.kind === 'required') {
        postModel
          .find()
          .then((posts) => {
            res.render('homepage', {
              postList: posts,
              errPostLength: 'Message is required',
              errCommentLength: null,
            });
          })
          .catch((err) => {
            console.log('Error fetching posts:', err);
            res.status(500).send('Internal Server Error');
          });
      } else {
        console.log('Error fetching posts:', err);
        res.status(500).send('Internal Server Error');
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

const editPostForm = (req, res) => {
  postModel
    .findById(req.params.postId)
    .then((post) => {
      res.render('edit-form', { post }); // ✅ PASSING post to the view
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Failed to load edit form');
    });
};
const updatePost = (requestObject, response) => {
  const postId = requestObject.params.postId;
  const updatedData = requestObject.body;//we request the name tag of EditPostForm input here

  postModel
    .findByIdAndUpdate(postId, updatedData, { new: true, runValidators: true })
    .then(() => {
      response.redirect('/'); // Redirect to homepage or post view
    })
    .catch((err) => {
      console.log('❌ Error updating post:', err);
      response.status(500).send('Internal Server Error' + err);
    });
};


const notFoundPage = (req, res) => {
  res.render('404page');
};

module.exports = {//need to export all functions mentioned above
  homePage,
  addNewPost,
  deletePost,
  updatePost,
  editPostForm,
  notFoundPage,
};
