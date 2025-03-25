const express = require('express');
const routes = require('./config/routes');
require('./config/mongoose');

const app = express();
const port = 3300;

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.post('/post', (req, res) => {
  const body = req.body.body;
});

const Post = require('./models/Post');

app.post('/post', async (req, res) => {
  const comment = req.body.comment;
  await Post.create({ comment });
  res.redirect('/');
});
app.get('/', async (req, res) => {
  const postList = await Post.find().sort({ createdAt: -1 });
  res.render('homepage', { postList });
});
app.post('/update-comment', async (req, res) => {
  const { postId, comment } = req.body;
  await Post.findByIdAndUpdate(postId, { comment });
  res.redirect('/');
});
app.get('/del/post/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
});
app.use(express.urlencoded({extended:true}));
app.use(express.json());




app.use(routes);
app.listen(port, "0.0.0.0", () =>
  console.log(`Server is running on http://localhost:${port}`)
);
