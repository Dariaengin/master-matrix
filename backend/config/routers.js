const express = require ('express');
const route = express ();
const userController = require ("../controller/userController")
// Routes
route.get('/',userController.homePage);
route.get ('/about/:userName', userController.aboutUser);
route.get ('/',userController.notFound)

