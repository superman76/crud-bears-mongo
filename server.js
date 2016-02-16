var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var Bear = require('./models/bear');

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

router.route('/bears')
	.post(function(req, res) {

	var bear = new Bear();

	bear.name = req.body.name;
	bear.age = req.body.age;
	bear.gender = req.body.gender;

	bear.save(function(err, bear) {
		if(err) {
			console.log(err)// do something
		} else {
			res.json(bear)// do something
		}
	})
})

	.get(function(req, res) {

	res.json({title: "I am trying to GET"})
	})




app.use('/api', router);

app.listen(port);
console.log('Magic happens on port' +port);