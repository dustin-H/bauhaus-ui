var express = require('express')

var app = express()

app.use(express.static('./'))

var PORT = 8080
app.listen(PORT, () => {
  console.log('Listening to port ' + PORT + '!')
})
