var express = require('express');

var app = express();

app.use(function(req, res, next) {
	//res.header('Access-Control-Allow-Origin', '*');
   next();
});

app.use(express.static('./'));

app.listen(1234);
