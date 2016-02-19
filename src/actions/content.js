import * as types from '../constants/ActionTypes.js';
import superagent from 'superagent';
import superagentPlugin from '../utils/helpers/superagentPlugin.js';

import {
	replaceParamsInObject, replaceAllParams
}
from '../utils/helpers';

import {
	findModules, ensureModules
}
from '../utils/moduleLoader';

import {
	showError
}
from './router.js';


function setData(newData, key) {
	return(dispatch, getState) => {
		var state = getState();
		var data = replaceParamsInObject(newData, state.router.route.params); // TODO: Error Handling
		var modules = findModules(newData);

		ensureModules(modules, function(ok) {
			if(ok === true) {
				var state = getState();
				if(state.router.location.key === key) {
					dispatch({
						type: types.CONTENT_SET_DATA,
						data
					});
				}
			}
			else {
				dispatch(showError());
			}
		});
	}
}

function setLoading() {
	return {
		type: types.CONTENT_SET_LOADING
	};
}

export function loadCurrentRoute() {
	return(dispatch, getState) => {
		var state = getState();
		dispatch(setLoading());
		var url = state.router.route.url; // TODO: Error Handling
		superagent
			.get(replaceAllParams(url, state.router.route.params)) // TODO: Error Handling
			.accept('json')
			.use(superagentPlugin({auth: true}))
			.end(function(err, res) {
				if(err != null) {
					return dispatch(showError(err, url));
				}
				var content = false;

				if(res.body.content != null && typeof res.body.content === 'object') {
					content = res.body.content;
				}
				var newState = getState();
				if(state.router.location.key === newState.router.location.key) {
					dispatch(setData(content, state.router.location.key));
				}
			});
	};
}
