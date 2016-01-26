import superagent from 'superagent';
import store from './store.js';
import * as c from './constants.js';

__GLOBAL__.exportDefault = null;

var evalCode = function(id, code) {
	try {
		__GLOBAL__.exportDefault = null;
		eval(code);
		if(__GLOBAL__.exportDefault != null) {
			store[id].module = __GLOBAL__.exportDefault;
			return true;
		}
		else {
			console.warn('A module needs to export to "__GLOBAL__.exportDefault"!');
		}
	}
	catch(e) {
		console.warn(e.message);
		setTimeout(function() {
			throw e;
		}, 0);
	}
	console.warn('Failed to parse module "', id, '"!');
	return false;
}

var triggerCallbacksById = function(id, ok) {
	for(var i in store[id].callbacks) {
		store[id].callbacks[i](ok);
	}
	store[id].callbacks = null;
	store[id].callbacks = [];
}

var loadModuleIfNecessary = function(id, cb) {
	if(store[id] != null) {
		if(store[id].state !== c.LOADING && store[id].state !== c.LOADED && store[id].url != null) {
			store[id].state = c.LOADING;
         store[id].callbacks.push(cb);
			superagent.get(store[id].url)
				.end(function(err, res) {
					if(err) {
						store[id].state = c.ERROR;
						return triggerCallbacksById(id, false);
					}
					if(evalCode(id, res.text) !== true) {
						store[id].state = c.ERROR;
						return triggerCallbacksById(id, false);
					}
					store[id].state = c.LOADED;
					return triggerCallbacksById(id, true);
				});
		}
		else {
			if(store[id].state === c.LOADED) {
				return setTimeout(function() {
					cb(true);
				}, 0);
			}
			else {
				store[id].callbacks.push(cb);
			}
		}
	}
	else {
		return cb(false);
	}
}

var loadModulesIfNecessary = function(ids, cb) {
	var check = true;
	var counter = 0;
	for(var i in ids) {
		var id = ids[i];
		counter++;
		loadModuleIfNecessary(id, function(ok) {
			counter--;
			if(ok !== true) {
				check = false;
			}
			if(counter < 1) {
				cb(check);
			}
		})
	}
}

export default loadModulesIfNecessary;
