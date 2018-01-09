var express = require('express');
var router = express.Router();
var chalk = require('chalk');

router.use('/users', require('./users'));
router.use('/tweets', require('./tweets'));

router.get('/', function(req, res) {
	console.log('API Root Route');
	res.status(200).send('Welcome to the API!');
});

module.exports = router;