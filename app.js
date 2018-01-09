var express = require('express');
var app = express();
var chalk = require('chalk');
var volleyball =require('volleyball');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(volleyball);

var routes = require('./routes');
app.use('/api', routes);

app.get('/', function (req, res, next) {
  res.send('Root Route');
});

app.get('/*', function(err, req, res, next) {
	res.status(404);
})

var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
