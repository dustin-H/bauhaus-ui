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
	}, 300);
})

app.use('/api', testapi())

app.use(express.static('./'));

var port = 1234;

app.listen(port, function(){
   console.log('Listening to port', port);
});
