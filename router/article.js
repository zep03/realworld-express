const express = require('express')
const articleController = require('../controller/article.js')
const auth = require('../middleware/auth.js')
const articleValidator = require('../validator/article.js')

const router = express.Router()


router.get('/', articleController.showIndex)

router.get('/editor', articleController.showEditor)

router.get('/editor:articleId', articleController.showEditor)

router.get('/article/:articleId', articleController.showArticle)


module.exports = router
