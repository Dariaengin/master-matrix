const express = require('express');
const userController = require('../controller/userController');
const route = express.Router();

// Routes
route.get('/', userController.homePage);
route.get('/*', userController.notFoundPage);

module.exports = route;
