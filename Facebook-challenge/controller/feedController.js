const feedModel = require('../model/feedModel');


const homePage = (req, res) => {
  feedModel
    .find()
    .sort({ createdAt: -1 }) // optional: latest first
    .then((feed) => {
      res.render('homepage', {
        feed,
        successMessage: null,
        errFeedLength: null,
        errCommentLength: null,
      });
    })
    .catch((err) => {
      console.error('❌ Failed to fetch feed:', err);
      res.status(500).send('Internal Server Error');
    });
};

const addFeedPage = (req, res) => {
  res.render('newFeed');
}
const addNewFeed = (req, res) => {
  const newAFeed = new feedModel(req.body);
  console.log('📥 New feed submitted:', req.body);

  newAFeed
    .save()
    .then(() => {
      return feedModel.find().sort({ createdAt: -1 });
    })
    .then((feed) => {
      res.render('homepage', {
        feed,
        successMessage: '✅ Feed saved successfully!',
        errFeedLength: null,
        errCommentLength: null,
      });
    })
    .catch((err) => {
      if (err && err.errors?.content?.kind === 'minlength') {
        feedModel.find().sort({ createdAt: -1 }).then((feed) => {
          res.render('homepage', {
            feed,
            errFeedLength: '❌ Content must be at least 25 characters.',
            successMessage: null,
            errCommentLength: null,
          });
        });
      } else {
        console.error('❌ Error saving feed:', err);
        res.status(500).send('Internal Server Error');
      }
    });
};
const editFeedPage = (req, res) => {
  const { id } = req.params;
 feedModel
    .findById(id)
    .then((feed) => {
      if (!feed) return res.status(404).render('404page');

      res.render('editFeed', { feed });
    })
    .catch((err) => {
      console.error('❌ Error fetching feed:', err);
      res.status(500).send('Internal Server Error');
    });
}

const updateFeed = async (req, res) => {
  const { id } = req.params;

  try {
    await feedModel.findByIdAndUpdate(
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
    console.error('❌ Failed to update feed:', err);
    res.status(500).send('Server error');
  }
};
const getFeedById = async (req, res) => {
  try {
    const feed = await feedModel.findById(req.params.id);
    if (!feed) return res.status(404).render('404page');

    res.render('feedDetails', { feed });
  } catch (err) {
    console.error(' Error fetching feed:', err);
    res.status(500).send('Internal Server Error');
  }
};
const deleteFeed = async (req, res) => {
  const { id } = req.params;

  try {
    await feedModel.findByIdAndDelete(id);
    console.log(`Feed ${id} deleted`);
    res.redirect('/');
  } catch (err) {
    console.error(' Failed to delete feed:', err);
    res.status(500).send('Failed to delete feed');
  }
};

const feedDetails = async (req, res) => {
  try {
    const feed = await feedModel.findById(req.params.id);
    if (!feed) return res.status(404).render('404page');

    res.render('feedDetails', { feed });
  } catch (err) {
    console.error(' Error fetching feed:', err);
    res.status(500).send('Internal Server Error');
  }
};

const notFoundPage = (req, res) => {
  res.render('404page');
};

module.exports = {
  homePage,
  addFeedPage,
  addNewFeed,
  updateFeed,
  getFeedById,
  deleteFeed,
  feedDetails,
  editFeedPage, 
  notFoundPage,
};
