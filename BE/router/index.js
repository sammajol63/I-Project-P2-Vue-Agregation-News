const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')
const {authentication} = require('../middleware/author')

router.post('/register', controller.register)
router.post('/login', controller.login)
router.post('/loginGoogle', controller.loginGoogle)

router.use(authentication)

router.get('/getNews', controller.getNews)



module.exports = router
