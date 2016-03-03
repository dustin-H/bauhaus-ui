import store from './store.js'
import loader from './loader.js'
import * as c from './constants.js'
import api from './api.js'

export function getModule(id) {
  if (store[id] != null && store[id].module != null && store[id].state === c.LOADED) {
    return store[id].module
  } else {
    return null
  }
}

export function defineModuleUrl(id, url) {
  if (store[name] != null) {
    console.warn('Do not overwrite already installed modules!', id, '=>', url)
    return false
  } else {
    store[id] = {}
    store[id].url = url
    store[id].callbacks = []
    store[id].state = c.INITAL
    store[id].module = null
    return true
  }
}

export function ensureModules(ids, cb) {
  return loader(ids, cb)
}

export function registerModule(id, module) {
  store[id] = {
    module: module,
    state: c.LOADED
  }
}

export function findModules(obj) {
  var arr = []
  if (obj.name != null && typeof obj.name === 'string') {
    arr.push(obj.name)
    if (obj.components != null && typeof obj.components === 'object') {
      for (var i in obj.components) {
        arr = arr.concat(findModules(obj.components[i]))
      }
    }
  }
  return arr
}
