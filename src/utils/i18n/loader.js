import superagent from 'superagent';
import store from '../../store/store.js';
import {
	parseLanguage
}
from '../../actions/i18n.js';
import {
	authPlugin
}
from '../auth/index.js';

var parse = function(data, packurl) {
	var arr = data.split('\n');
	var list = [];
	for(var i in arr) {
		var temp = null;
		if(arr[i].length > 0) {
			try {
				temp = JSON.parse(arr[i]);
			} catch(e) {
				console.warn('Failed to parse line', i, 'in language pack! [' + packurl + ']', e);
			}
		}
		if(temp != null && typeof temp === 'object') {
			temp.line = i;
			list.push(temp);
		}
	}
	store.dispatch(parseLanguage(list, packurl));
}
var loadLanguageByUrl = function(packurl, cb) {
	superagent.get(packurl).use(authPlugin).end(function(err, res) {
		parse(res.text, packurl);
		cb();
	})
}

var loadLanguagesByUrl = function(urlArray, cb) {
	var state = store.getState().i18n;
	var c = 0;
	for(var i in urlArray) {
		if(state.loaded.indexOf(urlArray[i]) < 0) {
			c++;
			loadLanguageByUrl(urlArray[i], function() {
				c--;
				if(c < 1) {
					cb();
				}
			});
		}
	}
	if(c < 1) {
		cb();
	}
}

export default loadLanguagesByUrl;
