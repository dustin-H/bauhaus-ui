import * as types from '../constants/ActionTypes.js';

const initialState = {
	location: {},
	routes: {},
	loading: false
};

export default function router(state = initialState, action) {
	switch(action.type) {
		case types.ROUTER_LOCATION_CHANGED:
			var newState = Object.assign({}, state);
			newState.location = action.location;
			return newState;
		case types.ROUTER_SET_ROUTES:
			var newState = Object.assign({}, state);
			newState.routes = action.routes;
			newState.loading = false;
			return newState;
		case types.ROUTER_SET_LOADING:
			var newState = Object.assign({}, state);
			newState.loading = true;
			return newState;
		default:
			return state;
	}
}
