export function replaceAll(str, key, value) {
	var old = null
	while(str !== old && str != null) {
		old = str
		str = str.replace(key, value)
	}
	return str
}

export function replaceAllParams(str, params){
   for(var j in params) {
      str = replaceAll(str, ':' + j, params[j])
   }
   return str
}

export function objectReplacer(obj, params) {
	for(var i in obj) {
		switch(typeof obj[i]) {
			case 'string':
            obj[i] = replaceAllParams(obj[i], params)
				break
			case 'array':
				obj[i] = objectReplacer(obj[i], params)
				break
			case 'object':
				obj[i] = objectReplacer(obj[i], params)
				break
			default:
		}
	}
	return obj
}
