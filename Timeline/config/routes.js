const express = require('express');
const userController = require('../controller/userController');

const route = express.Router();

// Routes
route.get('/', userController.homePage);
route.get('/*', userController.notFoundPage);
route.post('/add-new-user', userController.addNewUser);


// route.delete('/delete-user', userController.deleteUser);
module.exports = route;