const express = require('express');
const articleController = require('../controller/articleController');//link controller
const route = express.Router();//call express function for routing

route.get('/article/:id', articleController.articleDetails); //web route for article details
route.get('/add/article', articleController.addArticlePage);
route.get('/', articleController.homePage);//web route for homepage

route.post('/edit/article/:id', articleController.updateArticle);
//web route for edit article
route.get('/edit/article/:id', articleController.editArticlePage);
route.get('/article/:id', articleController.getArticleById); 
route.post('/add/article', articleController.addNewArticle)
route.post('/delete/article/:id', articleController.deleteArticle);

route.get('/*', articleController.notFoundPage);//web route for 404 page

module.exports = route;