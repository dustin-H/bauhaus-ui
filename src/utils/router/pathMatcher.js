
/*
This path matching algorithm is a copy from [react-router](https://github.com/rackt/react-router/blob/master/modules/PatternUtils.js)

Thanks to
 - @mjackson
 - @taion
 - @ryanflorence
 - @brenoc

Great work!
*/

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function escapeSource(string) {
  return escapeRegExp(string).replace(/\/+/g, '/+')
}

function _compilePattern(pattern) {
  let regexpSource = ''
  const paramNames = []
  const tokens = []

  let match, lastIndex = 0, matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g
  while ((match = matcher.exec(pattern))) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index))
      regexpSource += escapeSource(pattern.slice(lastIndex, match.index))
    }

    if (match[1]) {
      regexpSource += '([^/?#]+)'
      paramNames.push(match[1])
    } else if (match[0] === '**') {
      regexpSource += '([\\s\\S]*)'
      paramNames.push('splat')
    } else if (match[0] === '*') {
      regexpSource += '([\\s\\S]*?)'
      paramNames.push('splat')
    } else if (match[0] === '(') {
      regexpSource += '(?:'
    } else if (match[0] === ')') {
      regexpSource += ')?'
    }

    tokens.push(match[0])

    lastIndex = matcher.lastIndex
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length))
    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length))
  }

  return {
    pattern,
    regexpSource,
    paramNames,
    tokens
  }
}


var CompiledPatternsCache = {}

function compilePattern(pattern) {
  if (!(pattern in CompiledPatternsCache))
    CompiledPatternsCache[pattern] = _compilePattern(pattern)

  return CompiledPatternsCache[pattern]
}

function matchPattern(pattern, pathname) {
  // Make leading slashes consistent between pattern and pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = `/${pattern}`
  }
  if (pathname.charAt(0) !== '/') {
    pathname = `/${pathname}`
  }

  let { regexpSource, paramNames, tokens } = compilePattern(pattern)

  regexpSource += '/*' // Capture path separators

  // Special-case patterns like '*' for catch-all routes.
  const captureRemaining = tokens[tokens.length - 1] !== '*'

  if (captureRemaining) {
    // This will match newlines in the remaining path.
    regexpSource += '([\\s\\S]*?)'
  }

  const match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'))

  let remainingPathname, paramValues
  if (match != null) {
    if (captureRemaining) {
      remainingPathname = match.pop()
      const matchedPath =
        match[0].substr(0, match[0].length - remainingPathname.length)

      // If we didn't match the entire pathname, then make sure that the match
      // we did get ends at a path separator (potentially the one we added
      // above at the beginning of the path, if the actual match was empty).
      if (
        remainingPathname &&
        matchedPath.charAt(matchedPath.length - 1) !== '/'
      ) {
        return {
          remainingPathname: null,
          paramNames,
          paramValues: null
        }
      }
    } else {
      // If this matched at all, then the match was the entire pathname.
      remainingPathname = ''
    }

    paramValues = match.slice(1).map(
      v => v != null ? decodeURIComponent(v) : v
    )
  } else {
    remainingPathname = paramValues = null
  }

  return {
    remainingPathname,
    paramNames,
    paramValues
  }
}

export default matchPattern
