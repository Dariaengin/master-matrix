const express = require('express');
const controller = require('../controller/messageController');
const route = express.Router();

// Routes
route.get('/', controller.homePage);
route.get('/*', controller.notFoundPage);
route.post('/add-new-post', controller.addNewPost);

module.exports = route;