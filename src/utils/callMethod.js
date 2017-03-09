
/* ALLOWED INUPT:

GET:
callMethod('module/test')
callMethod('module/test?demo=12')
callMethod('module/test', '?demo=7')
callMethod('module/test?demo=12', '?demo=7')
callMethod({method: 'module/test'})
callMethod({method: 'module/test?demo=17'})
callMethod({method: 'module/test', params: '?demo=7'})
callMethod({method: 'module/test?demo=12', params: '?demo=7'})

POST:
callMethod('module/test', {demo: 7})
callMethod({method: 'module/test', params: {demo: 7}})


*/

import superagent from 'superagent'

export default function callMethod(method, paramsOrCallback, callback) {

  var httpMethod = 'get'
  var queries = []
  var req = {
    method: '',
    params: ''
  }

  if (method != null && typeof method === 'object') {
    req = method
  } else {
    req.method = method
    if (paramsOrCallback != null && typeof paramsOrCallback !== 'function') {
      req.params = paramsOrCallback
    }
  }

  if (req.params != null && typeof req.params === 'object') {
    httpMethod = 'post'
  }

  if (req.params != null && typeof req.params === 'string') {
    if (req.params[0] === '?') {
      req.params = req.params.substr(1)
    }
  }

  var responseHandler = (err, res) => {
    if (paramsOrCallback != null && typeof paramsOrCallback === 'function') {
      return paramsOrCallback(err, res.body)
    }
    callback(err, res.body)
  }

  if (httpMethod === 'get') {
    if (req.params != null && typeof req.params === 'string' && req.params.trim() !== '') {
      return superagent.get('api/' + req.method).query(req.params).end(responseHandler)
    } else {
      return superagent.get('api/' + req.method).end(responseHandler)
    }
  } else {
    return superagent.post('api/' + req.method).send(req.params).end(responseHandler)
  }
}
