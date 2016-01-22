var replaceAll = function(str, key, value) {
	var old = null;
	while(str !== old && str != null) {
		old = str;
		str = str.replace(key, value);
	}
	return str;
}

var objectReplacer = function(obj, params) {
	for(var i in obj) {
		switch(typeof obj[i]) {
			case 'string':
				for(var j in params) {
					obj[i] = replaceAll(obj[i], ':' + j, params[j]);
				}
				break;
			case 'array':
				obj[i] = objectReplacer(obj[i], params);
				break;
			case 'object':
				obj[i] = objectReplacer(obj[i], params);
				break;
			default:
		}
	}
	return obj;
}

export default objectReplacer;
