var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var bear = require('./models/bear');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
	console.log('there is something happening here');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our API!'});
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port' +port);