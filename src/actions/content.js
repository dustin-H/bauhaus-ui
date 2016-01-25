import * as types from '../constants/ActionTypes.js';
import superagent from 'superagent';
import superagentPlugin from '../utils/helpers/superagentPlugin.js';
import {
	loadError
}
from './config.js';
import {
	replaceParamsInObject, replaceAllParams
}
from '../utils/helpers';


function setData(newData) {
	return(dispatch, getState) => {
		var state = getState();
		var data = replaceParamsInObject(newData, state.router.route.params); // TODO: Error Handling

		dispatch({
			type: types.CONTENT_SET_DATA,
			data
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
			.use(superagentPlugin())
			.end(function(err, res) {
				if(err != null) {
					return dispatch(loadError(err, url));
				}
				var content = false;

				if(res.body.content != null && typeof res.body.content === 'object') {
					content = res.body.content;
				}
				var newState = getState();
				if(state.router.location.key === newState.router.location.key) {
					dispatch(setData(content));
				}
			});
	};
}