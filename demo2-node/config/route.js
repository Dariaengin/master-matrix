const express = require('express');
const authController = require('../controller/authController');
const router = express.Router();

router.get('/',authController.homePage);
router.get('/logout', authController.logoutUser);
router.get('/*', authController.notFoundPage);
router.get('/login', authController.getLoginPage);
router.post('/login', authController.loginUser);
router.get('/dashboard', authController.showDashboard);

router.post('/register', authController.registerUser);

module.exports = router;