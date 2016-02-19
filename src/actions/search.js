import * as types from '../constants/ActionTypes.js';
import superagent from 'superagent';
import superagentPlugin from '../utils/helpers/superagentPlugin.js';

export function toggle() {
	return {
		type: types.SEARCH_TOGGLE
	};
}

export function activate() {
	return {
		type: types.SEARCH_ACTIVATE
	};
}

export function deactivate() {
	return {
		type: types.SEARCH_DEACTIVATE
	};
}

function showError(err, url) {
	return {
		type: types.SEARCH_SHOW_ERROR,
		err,
		url
	};
}

var timer = null;

export function changeValue(value) {
	return(dispatch, getState) => {
		dispatch({
			type: types.SEARCH_CHANGE_VALUE,
			value
		});
      if(timer != null){
         clearTimeout(timer);
         timer = null;
      }
      timer = setTimeout(function(){
         dispatch(requestSearch());
      }, 200);
	}
}

function setResults(results) {
	return {
		type: types.SEARCH_SET_RESULTS,
		results
	};
}

function setLoading() {
	return {
		type: types.SEARCH_SET_LOADING
	};
}

export function requestSearch() {
	return(dispatch, getState) => {
		var state = getState();
		dispatch(setLoading());
		var url = state.config.endpoints.search.url;
		superagent
			.get(url)
         .query({search: state.search.value, languages: state.i18n.languages})
			.accept('json')
			.use(superagentPlugin({auth: true}))
			.end(function(err, res) {
				if(err != null) {
					return dispatch(showError(err, url));
				}
				var results = [];
				if(res.body.searchResults != null && typeof res.body.searchResults === 'object') {
					results = res.body.searchResults;
				}
				dispatch(setResults(results));
			});
	};
}
