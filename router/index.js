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

router.get('/profile', (req, res) => {
    res.render('profile.html')
})



module.exports = router
