var express = require('express');
var router = express.Router();
var tweetStorage = require('../tweetStorage');

router.get('/', function(req, res) {
	var allTweets = tweetStorage.getAllTweets();
	res.status(200).send(allTweets);
});

router.post('/', function(req, res) {
	var input = req.body;
	tweetStorage.createTweet();
	res.status(201).send('Tweet created!');
});

module.exports = router;