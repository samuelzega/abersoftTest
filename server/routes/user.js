const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')

/* GET users listing. */
router.post('/login', user.login)
router.post('/', user.register)
router.get('/', user.findOne)

module.exports = router
