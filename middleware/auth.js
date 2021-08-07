module.exports = async (req, res, next) => {
    // 检查有没有sessionUser，有就说明用户登录了
    const sessionUser = req.session.user
    if(sessionUser) {
        return next()
    }

    // 如果用户没有登录，则重定向到登录页面
    res.redirect('/login')
 }
