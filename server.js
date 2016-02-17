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
	res.render('index')
})

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