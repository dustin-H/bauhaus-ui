
var express = require('express')

module.exports = function(config){
   var app = express()

   app.use(express.static('./public'))

   if(config != null && typeof config === 'object'){
      app.get('/config.json', function(req, res){
         res.json(config)
      })
   }

   return app
}
