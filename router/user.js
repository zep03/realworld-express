const express = require('express')
const userController = require('../controller/user.js')
const userValidator = require('../validator/user.js')
const auth = require('../middleware/auth.js')
const noAuth = require('../middleware/no-auth.js')

const router = express.Router()


router.get('/login', noAuth, userController.showLogin)
router.post('/login', noAuth, userValidator.login, userController.login)
router.get('/logout', userController.logout)

router.get('/register', noAuth, userController.showRegister)
router.post('/register', userValidator.register, userController.register)

router.get('/settings', auth, userController.showSettings)

router.get('/profile/:username', userController.showProfile)

router.get('/profile/:username/favorites', userController.showProfile)


module.exports = router
