import { defineModuleUrl } from '../utils/moduleLoader'

import modules from '../coreModules.js'

var registerModules = function() {
  for (var i in modules) {
    var name = modules[i]
    defineModuleUrl(name, 'modules/' + name + '.js')
  }
}

export default registerModules
