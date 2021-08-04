const { body, param } = require('express-validator')
const validate = require('../middleware/validate.js')
const mongoose = require('mongoose')

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('文章标题不能为空'),
    body('article.description').notEmpty().withMessage('文章摘要不能为空'),
    body('article.body').notEmpty().withMessage('文章内容不能为空')
])

exports.getArticle = validate([
    param('articleId').custom(async value => {
        if(!mongoose.isValidObjectId(value)) {
            // 返回一个失败状态的promise
            return Promise.reject('文章ID类型错误')
            // 同步失败
            // throw new Error('文章ID类型错误')
        }
        // 同步成功
        // return true
    })
])