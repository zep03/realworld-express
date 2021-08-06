const express = require('express')
const userController = require('../controller/user.js')
const userValidator = require('../validator/user.js')
const auth = require('../middleware/auth.js')

const router = express.Router()


router.get('/login', userController.showLogin)

router.get('/register', userController.showRegister)
router.post('/register', userValidator.register, userController.register)

router.get('/settings', userController.showSettings)

router.get('/profile/:username', userController.showProfile)

router.get('/profile/:username/favorites', userController.showProfile)


module.exports = router
