import pathMatcher from './pathMatcher.js'

var matchRoutes = function(routes, location) {
  for (var i in routes) {
    var route = routes[i]
    var match = pathMatcher(route.route, location.pathname)
    if (match.paramValues != null && match.paramNames != null && match.paramValues.length === match.paramNames.length) {
      var params = {}
      for (var j in match.paramNames) {
        params[match.paramNames[j]] = match.paramValues[j]
      }
      return {
        route: i,
        params: params,
        url: route.endpoint,
        pathname: route.route
      }
    }
  }
  return false
}

export default matchRoutes
