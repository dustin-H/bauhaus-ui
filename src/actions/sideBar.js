import * as types from '../constants/ActionTypes.js';
import superagent from 'superagent';
import superagentPlugin from '../utils/helpers/superagentPlugin.js';

function setList(list) {
	return {
		type: types.SIDEBAR_SET_LIST,
		list
	};
}

function setLoading() {
	return {
		type: types.SIDEBAR_SET_LOADING
	};
}

function showError(err, url) {
	return {
		type: types.SIDEBAR_SHOW_ERROR,
		err,
		url
	};
}

export function load() {
	return(dispatch, getState) => {
		var state = getState();
		if(state.sideBar.loading === false) {
			dispatch(setLoading());
			var url = state.config.endpoints.sideBar.url;
			superagent
				.get(url)
				.accept('json')
				.use(superagentPlugin())
				.end(function(err, res) {
					if(err != null) {
						return dispatch(showError(err, url));
					}
					var sideBarContent = [];

					if(res.body.sideBar != null && typeof res.body.sideBar === 'object') {
						sideBarContent = res.body.sideBar;
					}
					dispatch(setList(sideBarContent));
				});
		}
		else {
			console.warn('SideBar.load called as it was loading!');
		}
	};
}
