import * as types from '../constants/ActionTypes.js';

const initialState = {
	results: [],
	loading: false,
	active: false,
   error: false,
	value: ""
};

export default function search(state = initialState, action) {
	switch(action.type) {
		case types.SEARCH_ACTIVATE:
			var newState = Object.assign({}, state);
			newState.active = true;
			return newState;
		case types.SEARCH_TOGGLE:
			var newState = Object.assign({}, state);
			newState.active = !newState.active;
			return newState;
		case types.SEARCH_DEACTIVATE:
			var newState = Object.assign({}, state);
			newState.active = false;
			return newState;
		case types.SEARCH_SET_LOADING:
			var newState = Object.assign({}, state);
			newState.loading = true;
			newState.error = false;
			return newState;
		case types.SEARCH_CHANGE_VALUE:
			var newState = Object.assign({}, state);
			newState.value = action.value;
			return newState;
		case types.SEARCH_SET_RESULTS:
			var newState = Object.assign({}, state);
			while(action.results.length > 10) {
				action.results.pop();
			}
			newState.results = action.results;
			newState.loading = false;
			newState.error = false;
			return newState;
		case types.SEARCH_SHOW_ERROR:
			var newState = Object.assign({}, state);
			newState.error = true;
			newState.loading = false;
			return newState;
		default:
			return state;
	}
}
