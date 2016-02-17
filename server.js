var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var Bear = require('./models/bear');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');

var bearRouter = require('./routes/bears');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {title: "A Collection of Bears"})
});
	// app.set & app.get use 
	// with the res.render('index') you can also pass other objects
	// in such as {title: "hello world"}

app.get('/about', function(req, res){
	var data ={};
	data.title = 'ABOUT PAGE';
	data.name = 'Charles Blood';
	data.time = new Date();
	res.render('about', data);
});

app.get('/bears', function(req, res){
	res.render('bears', {title: "Even More BEARS"})
});

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
	console.log('there is something happening here');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our API!'});
});

app.use('/api', bearRouter);
	// when we added the routes directory with bears.js we had 
	// to create a new router called bearRouter, which was just
	// updated on line 28

app.listen(port);
console.log('Magic happens on port' +port);