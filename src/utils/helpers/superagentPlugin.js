import { loadLanguagePacks } from '../i18n/index.js'
import { defineModuleUrl } from '../moduleLoader/index.js'

import store from '../../store/store.js'

var superagentPlugin = function(config = {}) {
  if (config.disable == null) {
    config.disable = {}
  }
  return function(request) {
    var state = store.getState()
    request._end = request.end
    request.end = function(fn) {
      if (config.auth === true && state.auth.token != null && state.auth.token !== '' && state.auth.error === false && state.auth.header != null && state.auth.header !== '') {
        request = request.set(state.auth.header, state.auth.token)
      }
      request._end(function(err, res) { // TODO: REFACTOR THIS
        if (err != null) {
          return fn(err, res)
        }
        if (res.type !== 'application/json') {
          return fn(err, res)
        }
        if (res.body != null && res.body.modules != null && config.disable.modules !== true && typeof res.body.modules === 'object') {
          for (var i in res.body.modules) {
            defineModuleUrl(i, res.body.modules[i])
          }
        }
        if (res.body != null && res.body.i18n != null && config.disable.i18n !== true) {
          loadLanguagePacks(res.body.i18n, function() {
            fn(err, res)
          })
        } else {
          fn(err, res)
        }
      })
    }
    return request
  }
}

export default superagentPlugin
