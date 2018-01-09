var express = require('express');
var router = express.Router();
var chalk = require('chalk');

router.use('/users', require('./users'));
router.use('/tweets', require('./tweets'));

module.exports = router;