const { Article, User } = require('../model/index.js')
const mongoose = require('mongoose')
// const JSONbig = require('json-bigint');

exports.showIndex = async (req, res, next) => {
    try {
        const page = req.query.page ? Number.parseInt(req.query.page) : 1
        const pageSize = 2
        const articles = await Article.find()
            .skip((page - 1) * pageSize)
            .limit(pageSize).populate('author')
        console.log(articles)
        const articlesCount = await Article.countDocuments()
        res.render('index.html', {
            articles: articles,
            page: page, // 当前页码
            pageSize: pageSize, // 每页大小
            articlesCount: articlesCount, // 文章数量
            totalPage: Math.ceil(articlesCount / pageSize) // 总共几页
        })
    } catch (err) {
        next(err)
    }
}
exports.showEditor = async (req, res, next) => {
    try {
        res.render('editor.html')
    } catch (err) {
        next(err)
    }
}
exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article({
            ...req.body.article,
            author: req.session.user._id
        })
        await article.save()

        res.status(201).json({
            article: article
        })
    } catch (err) {
        next(err)
    }
}

exports.showArticle = async (req, res, next) => {
    try {
        const articleId = mongoose.Types.ObjectId(req.params.articleId)
        const article = await Article.findById(articleId).populate('author')
        console.log(article)
        res.render('article.html', {
            article: article
        })
    } catch (err) {
        next(err)
    }
}


