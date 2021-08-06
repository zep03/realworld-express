exports.showIndex = async (req, res, next) => {
    try {
        console.log(req.session.user)
        res.render('index.html')
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
exports.showArticle = async (req, res, next) => {
    try {
        res.render('article.html')
    } catch (err) {
        next(err)
    }
}
