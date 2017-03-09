
var bodyParser = require('body-parser')
var express = require('express')
var bauhaus = require('bauhausjs')
var path = require('path')
var _ = require('lodash')

var sortByOrder = (a, b) => {
  if (a.order > b.order) {
    return 1
  }
  if (a.order < b.order) {
    return -1
  }
  return 0
}

module.exports = (config, modules) => {
  var app = express()

  var bauhausuiModules = []
  var searchMethods = []
  var configMethods = []
  var maxSearchResultsPerModule = parseInt(_.get(config, 'bauhausui.maxSearchResultsPerModule'))
  if (isNaN(maxSearchResultsPerModule) === true) {
    maxSearchResultsPerModule = 3
  }

  for (var i in modules) {
    var m = _.get(modules[i], 'module.bauhausui')
    if (m != null) {
      bauhausuiModules.push(modules[i])
      var s = _.get(m, 'search')
      if (s != null && typeof s === 'function') {
        searchMethods.push(s)
      }
      var c = _.get(m, 'config')
      if (c != null && typeof c === 'function') {
        configMethods.push(c)
      }
    }
  }

  app.get('/api/config', (req, res) => {
    var c = _.get(config, 'bauhausui') || {}
    c.appName = c.appName || 'MyHomepage.com'
    c.appIcon = c.appIcon || 'media/default_logo.svg'
    c.rootRoute = c.rootRoute || 'bauhaus-ui/root'
    c.menu = c.menu || []


    var count = 1

    var fin = () => {
      count--
      if (count < 1) {
        c.menu = c.menu.filter((elem, index, array) => {
          var title = _.get(elem, 'title')
          var link = _.get(elem, 'link')
          var order = parseInt(_.get(elem, 'order'))
          elem.order = isNaN(order) === true ? 0 : order
          var type = _.get(elem, 'type')

          return (title != null && typeof title === 'string' && type != null && typeof type === 'string' && link != null && typeof link === 'string')
        })
        c.menu.sort(sortByOrder)
        res.json(c)
      }
    }

    for (var i in configMethods) {
      count++
      configMethods[i]((r) => {
        c.appName = r.appName || c.appName
        c.appIcon = r.appIcon || c.appIcon
        c.rootRoute = r.rootRoute || c.rootRoute

        if (Array.isArray(r.menu) === true) {
          c.menu = c.menu.concat(r.menu)
        }
        fin()
      })
    }
    fin()
  })

  app.get('/api/search', (req, res) => {
    var q = _.get(req, 'query.q')
    if (q == null || typeof q !== 'string') {
      return res.status(400).json({
        error: 'Missing query parameter [q]!'
      })
    }
    var results = []
    var count = 1

    var fin = () => {
      count--
      if (count < 1) {
        results.sort((a, b) => {
          if (a.rank < b.rank) {
            return 1
          }
          if (a.rank > b.rank) {
            return -1
          }
          return 0
        })
        res.json({
          results: results
        })
      }
    }

    for (var i in searchMethods) {
      count++
      searchMethods[i](q, (r) => {
        var c = 0
        for (var j in r) {
          if (isNaN(_.get(r[j], 'rank')) === false && r[j].rank <= 100 && r[j].rank >= 0 && typeof _.get(r[j], 'title') === 'string' && typeof _.get(r[j], 'description') === 'string' && typeof _.get(r[j], 'link') === 'string') {
            results.push(r[j])
            c++
            if (c >= maxSearchResultsPerModule) {
              break
            }
          }
        }
        fin()
      })
    }
    fin()
  })

  var callMethod = (req, res, data) => {
    var method = _.get(modules, [req.params.module, 'module', 'bauhausui', 'methods', req.params.method])
    if (method == null || typeof method !== 'function') {
      return res.status(404).send({
        error: 'Module or method not found!'
      })
    }
    method(data, (error, ret) => {
      if (error != null) {
        return res.status(500).json({
          error: error
        })
      }
      res.json(ret)
    }, {
      req: req,
      res: res,
      config: config,
      modules: modules
    })
  }

  app.get('/api/:module/:method', (req, res) => {
    callMethod(req, res, req.query)
  })

  app.post('/api/:module/:method', bodyParser.json(), (req, res) => {
    callMethod(req, res, req.body)
  })

  app.use(express.static(path.join(__dirname, 'public')))

  return app
}
