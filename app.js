const express = require('express')
const morgan = require('morgan')
const path = require('path')
const router = require('./router/index.js')
const errorhandler = require('errorhandler')
require('./model/index.js')
const app = express()

const template = require('art-template')

// 当渲染以 .art结尾的资源文件的时候 使用express-art-template
app.engine('html', require('express-art-template'))
// art-template 模板引擎的配置
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
})
// 配置模板文件的存储目录
app.set('views', path.join(__dirname, 'views'))
// 可以省略的模板文件后缀名
app.set('view engine', 'html')

// 这里的意思是说：请求./public目录里面的资源的时候，必须加上前缀/public来访问
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))


// 日志输出
app.use(morgan('dev'))

// 解析请求体
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 挂载统一处理服务端错误中间件
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler())
}

const PORT = process.env.PORT || 3000
// 挂载路由
app.use(router)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
