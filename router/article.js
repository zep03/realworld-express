const express = require('express')
const articleController = require('../controller/article.js')
const auth = require('../middleware/auth.js')
const noAuth = require('../middleware/no-auth.js')
const articleValidator = require('../validator/article.js')

const router = express.Router()


router.get('/', articleController.showIndex)

router.get('/editor', auth, articleController.showEditor)

router.get('/editor/:articleId', auth, articleController.showEditor)

router.get('/article/:articleId', articleController.showArticle)

router.post('/articles', auth, articleValidator.createArticle, articleController.createArticle)


module.exports = router
