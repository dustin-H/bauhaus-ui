import * as types from '../constants/ActionTypes.js';
//import * as pageTypes from '../constants/PageTypes.js';
//import superagent from 'superagent';
//import languagePlugin from '../utils/i18n/plugin.js';

import store from '../store/store.js';

import createHistory from 'history/lib/createHashHistory';
let history = createHistory();
let unlisten = history.listen(location => {
	//console.log(location);
	store.dispatch(locationChanged(location))
})

function locationChanged(location) {
	return {
		type: types.ROUTER_LOCATION_CHANGED,
		location
	};
}

export function pushLocation(location) {
   history.push(location);
	return {
		type: types.ROUTER_PUSH_LOCATION,
		location
	};
}
