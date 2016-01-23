import * as types from '../constants/ActionTypes.js';
import superagent from 'superagent';
import superagentPlugin from '../utils/helpers/superagentPlugin.js';

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

function setRoutes(routes) {
	return {
		type: types.ROUTER_SET_ROUTES,
		routes
	};
}

function setLoading() {
	return {
		type: types.ROUTER_SET_LOADING
	};
}

export function loadRoutes() {
	return(dispatch, getState) => {
		var state = getState();
		if(state.router.loading === false) {
			dispatch(setLoading());
			var url = state.config.endpoints.routes.url; // TODO: Error Handling
			superagent
				.get(url)
				.accept('json')
				.use(superagentPlugin())
				.end(function(err, res) {
					if(err != null) {
						return dispatch(loadError(err, url));
					}
					var routes = {};

					if(res.body.routes != null && typeof res.body.routes === 'object') {
						routes = res.body.routes;
					}
					dispatch(setRoutes(routes));
				});
		}
		else {
			console.warn('router.loadRoutes called as it was loading!');
		}
	};
}
