
var express = require('express')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

module.exports = function(){
  var app = express()

  var theData = {};

  app.use(function(req, res, next){
    if(req.headers != null && req.headers.authorization != null && req.headers.authorization === 'NotSecureToken'){
      return next()
    }
    res.status(401).send()
  })

  app.get('/:id', function(req, res) {
    if (theData[req.params.id] !== false) {
      if (theData[req.params.id] == null) {
        theData[req.params.id] = {};
      }
      res.json(theData[req.params.id]);
    } else {
      res.status(404)
        .send();
    }
  });

  app.put('/:id', jsonParser, function(req, res) {
    theData[req.params.id] = req.body;
    res.send();
  });

  app.delete('/:id', function(req, res) {
    theData[req.params.id] = null;
    res.send();
  });

  return app
}
