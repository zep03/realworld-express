const express = require('express')

const router = express.Router()

router.use(require('./user.js'))
router.use(require('./article.js'))

module.exports = router
