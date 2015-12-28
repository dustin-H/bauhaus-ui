
import store from '../../store/store.js';
import loader from './loader.js';

import {
	addFallbacks
}
from '../../actions/i18n.js';

export function _(id) {
	var state = store.getState().i18n;
	if(state.store[id] != null) {
		for(var i in state.languages) {
			if(state.store[id][state.languages[i]] != null) {
				return state.store[id][state.languages[i]];
			}
			languageComplete[state.languages[i]] = false;
		}
		for(var i in state.store[id]) {
			return state.store[id][i];
		}
	}
	console.error('Could not get i18n text of id [', id, ']!');
	return id;
}

export function loadLanguages(pack, cb) {
	if(Object.keys(pack).length > 0) {
		var state = store.getState().i18n;
		var loadNow = null;
		var fallbacks = [];
		var isComplete = false;
		for(var i in languages) {
			if(pack[languages[i]] != null) {
				if(loadNow == null) {
					var loadNow = pack[state.languages[i]].url;
					if(pack[state.languages[i]].complete === true) {
						isComplete = true;
						break;
					}
				} else {
					if(pack[state.languages[i]].complete === true) {
						isComplete = true;
						fallbacks.push(pack[state.languages[i]].url);
						break;
					}
				}
			}
		}
		if(loadNow == null) {
			var chosen = null;
			for(var i in pack) {
				if(pack[i].complete === true && (loadNow == null || (loadNow != null && i === 'en'))) {
					chosen = i;
					isComplete = true;
					loadNow = pack[i].url;
					if(i === 'en') {
						break;
					}
				}
			}
		}
		if(loadNow == null) {
			for(var i in pack) {
				if(loadNow == null || (loadNow != null && i === 'en')) {
					isComplete = true;
					loadNow = pack[i].url;
					if(i === 'en') {
						break;
					}
				}
			}
		}
		if(isComplete === false) { // Search for a complete language package
			var lUrl = null;
			for(var i in pack) {
				if(pack[i].complete === true && (isComplete === false || (isComplete === true && i === 'en'))) {
					isComplete = true;
					lUrl = pack[i].url;
					if(i === 'en') {
						break;
					}
				}
			}
			if(lUrl != null) {
				fallbacks.push(lUrl);
			}
		}
		var toLoad = [loadNow];
		if(state.fallbackMode === true){
			toLoad = toLoad.concat(fallbacks);
		} else {
			store.dispatch(addFallbacks(fallbacks));
		}
		loader(toLoad, cb);
	} else {
		cb();
	}
}
