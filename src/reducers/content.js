import * as types from '../constants/ActionTypes.js';

const initialState = {
	data: false,
	loading: false
};

export default function content(state = initialState, action) {
	switch(action.type) {
		case types.CONTENT_SET_DATA:
			var newState = Object.assign({}, state);
			newState.data = action.data;
			newState.loading = false;
			return newState;
		case types.CONTENT_SET_LOADING:
			var newState = Object.assign({}, state);
			newState.loading = true;
			return newState;
		default:
			return state;
	}
}
