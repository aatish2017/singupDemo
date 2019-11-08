var express = require('express');
var router = express.Router();
var authController = require('../controller/authController.js')

router.post('/singup', authController.singup);


module.exports = router;
