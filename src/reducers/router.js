import * as types from '../constants/ActionTypes.js';

const initialState = {
	location: {}
};

export default function router(state = initialState, action) {
	switch(action.type) {
		case types.ROUTER_LOCATION_CHANGED:
			var newState = Object.assign({}, state);
			newState.location = action.location;
			return newState;
		default:
			return state;
	}
}
