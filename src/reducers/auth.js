import * as types from '../constants/ActionTypes.js';

const initialState = {
	header: 'Authorization',
	token: localStorage.getItem('token') || '',
	profile: {
		firstname: '',
		lastname: '',
		avatarUrl: ''
	}
};

export default function i18n(state = initialState, action) {
	switch(action.type) {
		case types.AUTH_LOGIN:
			var newState = Object.assign({}, state);

			newState.loaded.push(action.url);
			return newState;
		case types.AUTH_LOGOUT:
			var newState = Object.assign({}, state);
			
			return newState;
		case types.AUTH_LOGIN_CALLBACK:
			var newState = Object.assign({}, state);
			if(action.token != null && typeof action.token === 'string' && action.token !== '') {
				newState.header = action.header || newState.header;
				newState.token = action.token;
            localStorage.setItem('token', action.token);
			}
			return newState;
		default:
			return state;
	}
}
