const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html')
})

router.get('/login', (req, res) => {
    res.render('login.html', {
        isLogin: true
    })
})

router.get('/register', (req, res) => {
    res.render('login.html')
})

router.get('/settings', (req, res) => {
    res.render('settings.html')
})

router.get('/editor', (req, res) => {
    res.render('editor.html')
})

router.get('/editor:articleId', (req, res) => {
    res.render('editor.html')
})

router.get('/article/:articleId', (req, res) => {
    res.render('article.html')
})

router.get('/profile/:username', (req, res) => {
    res.render('profile.html')
})

router.get('/profile/:username/favorites', (req, res) => {
    res.render('profile.html')
})


module.exports = router
