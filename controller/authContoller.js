var express = require('express');

let authController = {};


authController.singup = function(req, res) {
	console.log('m here);
	
	 res.status(200).send('hello word');
	
	
}

module.exports = authController; 