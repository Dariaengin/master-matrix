const articleModel = require('../model/articleModel');

// ✅ Homepage: show all articles
const homePage = (req, res) => {
  articleModel
    .find()
    .sort({ createdAt: -1 }) // optional: latest first
    .then((articles) => {
      res.render('homepage', {
        articles,
        successMessage: null,
        errArticleLength: null,
        errCommentLength: null,
      });
    })
    .catch((err) => {
      console.error('❌ Failed to fetch articles:', err);
      res.status(500).send('Internal Server Error');
    });
};

const addArticlePage = (req, res) => {
  res.render('newArticle');
}

// ✅ Add a new article
const addNewArticle = (req, res) => {
  const newArticle = new articleModel(req.body);
  console.log('📥 New article submitted:', req.body);

  newArticle
    .save()
    .then(() => {
      return articleModel.find().sort({ createdAt: -1 });
    })
    .then((articles) => {
      res.render('homepage', {
        articles,
        successMessage: '✅ Article saved successfully!',
        errArticleLength: null,
        errCommentLength: null,
      });
    })
    .catch((err) => {
      if (err && err.errors?.content?.kind === 'minlength') {
        articleModel.find().sort({ createdAt: -1 }).then((articles) => {
          res.render('homepage', {
            articles,
            errArticleLength: '❌ Content must be at least 25 characters.',
            successMessage: null,
            errCommentLength: null,
          });
        });
      } else {
        console.error('❌ Error saving article:', err);
        res.status(500).send('Internal Server Error');
      }
    });
};
const editArticlePage = (req, res) => {
  const { id } = req.params;
  articleModel
    .findById(id)
    .then((article) => {
      if (!article) return res.status(404).render('404page');

      res.render('editArticle', { article });
    })
    .catch((err) => {
      console.error('❌ Error fetching article:', err);
      res.status(500).send('Internal Server Error');
    });
}

const updateArticle = async (req, res) => {
  const { id } = req.params;

  try {
    await articleModel.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // ✅ Redirect to homepage instead of rendering here
    res.redirect('/');
  } catch (err) {
    console.error('❌ Failed to update article:', err);
    res.status(500).send('Server error');
  }
};
const getArticleById = async (req, res) => {
  try {
    const article = await articleModel.findById(req.params.id);
    if (!article) return res.status(404).render('404page');

    res.render('articleDetails', { article });
  } catch (err) {
    console.error(' Error fetching article:', err);
    res.status(500).send('Internal Server Error');
  }
};
const deleteArticle = async (req, res) => {
  const { id } = req.params;

  try {
    await articleModel.findByIdAndDelete(id);
    console.log(`Article ${id} deleted`);
    res.redirect('/');
  } catch (err) {
    console.error(' Failed to delete article:', err);
    res.status(500).send('Failed to delete article');
  }
};

const articleDetails = async (req, res) => {
  try {
    const article = await articleModel.findById(req.params.id);
    if (!article) return res.status(404).render('404page');

    res.render('articleDetails', { article });
  } catch (err) {
    console.error(' Error fetching article:', err);
    res.status(500).send('Internal Server Error');
  }
};
// ✅ 404 fallback page
const notFoundPage = (req, res) => {
  res.render('404page');
};

module.exports = {
  homePage,
  addArticlePage,
  addNewArticle,
  updateArticle,
  notFoundPage,
  getArticleById,
  deleteArticle,
  articleDetails,
  editArticlePage
};
