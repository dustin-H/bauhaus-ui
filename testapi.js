var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


var bauhausui = require('./index.js')
var login = require('./example/api/login')
var jsondata = require('./example/api/jsondata')
var config = require('./example/config.json')

app.use('/json', jsondata())

app.use('/static', express.static('./example/static'))

app.use(bauhausui(config))

app.post('/api/login', jsonParser, login)

app.listen(5000)
