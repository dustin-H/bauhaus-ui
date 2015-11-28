import store from './store.js';
import loader from './loader.js';
import c from './constants.js';

export function getModule(id) {
	if (store[id] != null && store[id].module != null && store[id].state === c.LOADED) {
		return store[id].module;
	} else {
		return null;
	}
}

export function defineModuleUrl(id, url) {
	if (store[name] != null) {
		console.warn('Do not overwrite already installed components!', id, '=>', url);
		return false;
	} else {
		store[id] = {};
		store[id].url = url;
		store[id].callbacks = [];
		store[id].state = c.INITAL;
		store[id].module = null;
		return true;
	}
}

export function ensureModules(ids, cb) {
	return loader(ids, cb);
}
