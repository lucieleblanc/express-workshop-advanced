var express = require('express');
var chalk = require('chalk');
var router = express.Router();
var userStorage = require('../userStorage');

router.get('/', function(req, res) {
	var allUsers = userStorage.getAllUsers();
	res.status(200).send(allUsers);
});

router.get('/:name', function(req, res) {
	var name = req.params.name;
	var userData = userStorage.getUserByName(name);
	res.status(200).send(userData);
});

router.post('/', function(req, res, next) {
	var input = req.body;
	if (userStorage.getUserByName(input.name)) {
		var err = new Error('User already exists');
		next(err);
	} else {
		userStorage.createUser(input.name, input.age, input.salary);
		console.log('Created user ' + input.name + ', ' + input.age + ' who gets paid ' + input.salary + 'K');
		res.status(201).send('User created!');
	}
});

module.exports = router;