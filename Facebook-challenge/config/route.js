const express = require('express');
const feedController = require('../controller/feedController');
const route = express.Router();
route.get('/feed/:id', feedController.feedDetails); 
route.get('/add/feed', feedController.addFeedPage);
route.get('/', feedController.homePage);
route.post('/edit/feed/:id', feedController.updateFeed);
route.get('/edit/feed/:id', feedController.editFeedPage);
route.get('/feed/:id', feedController.getFeedById); 
route.post('/add/feed', feedController.addNewFeed)
route.post('/delete/feed/:id', feedController.deleteFeed);
route.get('*', feedController.notFoundPage);

module.exports = route;