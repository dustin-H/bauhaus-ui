var express = require('express');
var testapi = require('./testapi/app.js');

var app = express();

app.use(function(req, res, next) {
	//res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use('/config.json', function(req, res, next) {
	setTimeout(function() {
		next();
	}, 1500);
})

app.use('/api', testapi())

app.use(express.static('./'));

app.listen(1234);
