const { User } = require('../model/index.js')

exports.showLogin = async (req, res, next) => {
    try {
        res.render('login.html', {
            isLogin: true
        })
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = req.user
        // 1.保存登录状态
        req.session.user = user
        // 2.跳转到首页
        res.status(200).json({
            user: user
        })
    } catch (err) {
        next(err)
    }
}

exports.logout = async (req, res, next) => {
    try {
        // 清除用户的登录状态
        req.session.user = null
        // 跳转到首页
        res.redirect('/')
    } catch (err) {
        next(err)
    }
}

exports.showRegister = async (req, res, next) => {
    try {
        res.render('login.html')
    } catch (err) {
        next(err)
    }
}

exports.register = async (req, res, next) => {
    try {
        console.log(req.body)
        // 1.数据验证
        // 2.验证通过，创建新的用户
        const user = new User(req.body.user)
        await user.save()

        // 3.保持登录状态
        req.session.user = user

        // 4.跳转到首页
        res.status(200).json({
            user: user
        })
    } catch (err) {
        next(err)
    }
}

exports.showSettings = async (req, res, next) => {
    try {
        res.render('settings.html')
    } catch (err) {
        next(err)
    }
}

exports.showProfile = async (req, res, next) => {
    try {
        res.render('profile.html')
    } catch (err) {
        next(err)
    }
}



