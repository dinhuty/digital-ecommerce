const express = require('express')
const router = express.Router()
const authValidation = require('../validations/authValidation')
const authController = require('../controllers/auth.controller')
router.post(
    '/register',
    authValidation.register,
    authController.register
)
router.post(
    '/login',
    authValidation.login,
    authController.login
)

router.post(
    '/refresh-token',
    authController.refreshToken
)


module.exports = router