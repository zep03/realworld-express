module.exports = async (req, res, next) => {
    // 检查有没有sessionUser，有就说明用户登录了
    const sessionUser = req.session.user
    if(sessionUser) {
        // 如果用户已经登录，则重定向到首页
        return res.redirect('/')
    }
    // 用户没有登录
    next()
}

// 用户已经登录了，就不允许用户再访问注册页和登录页
