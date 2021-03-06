var express = require('express');
var testapi = require('./testapi/app.js');
var bauhausui = require('./index.js');
var config = require('./config.json');
var proxy = require('http-proxy-middleware');

var app = express();

app.use(function(req, res, next) {
  //res.header('Access-Control-Allow-Origin', '*');
  next();
});

/*app.use('/config.json', function(req, res, next) {
	setTimeout(function() {
		next();
	}, 300);
})*/

app.use('/api', testapi())

app.use(bauhausui(config));

/*app.use(function(req, res, next) {
  setTimeout(function() {
    next();
  }, 2000);
})*/

app.use(proxy('/', {
  target: 'http://localhost:3000',
  changeOrigin: false,
  ws: false,
}));

var port = 1234;

app.listen(port, function() {
  console.log('Listening to port', port);
});
