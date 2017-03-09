/*var express = require('express')

var app = express()

app.use(express.static('./'))

var PORT = 8080
app.listen(PORT, () => {
  console.log('Listening to port ' + PORT + '!')
})*/


var express = require('express')
var bauhaus = require('bauhausjs')
var path = require('path')
var api = require('./api.js')

module.exports = {
  express: (config, modules) => {
    var app = express()

    var backendPath = 'backend'
    if (config.bauhausui != null && typeof config.bauhausui === 'object' && config.bauhausui.path != null && typeof config.bauhausui.path === 'string') {
      backendPath = config.bauhausui.path
    }

    if (backendPath[0] !== '/') {
      backendPath = '/' + backendPath
    }

    app.use(backendPath, api(config, modules))

    return app
  },
  bauhausui: {
    search: (q, cb) => {
      var get = (i) => {
        return {
          rank: Math.round(Math.random() * 100),
          title: 'RES HAHA ' + i + ' for ' + q,
          description: 'DEPP ' + i,
          link: 'module/method' + i
        }
      }
      cb([get(1), get(2), get(3), get(4), get(5)])
    },
    methods: {
      root: (data, cb, context) => {
        setTimeout(() => {
          cb(null, {
            title: 'Welcome! '+(data.test || 42),
            __html: '<div style="position: relative; margin-top: 100px; width: 100%; text-align: center;">WELCOME!<br/><br/>' + JSON.stringify(data, null, 2) + '</div>'
          })
        }, 2000)
      }
    },
    config: (cb) => {
      cb({
        menu: [{
          title: 'Posts',
          type: 'main',
          link: 'bauhaus-ui/root'
        }]
      })
    }
  }
}
