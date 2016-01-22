import * as types from '../constants/ActionTypes.js';
import * as pageTypes from '../constants/PageTypes.js';
import superagent from 'superagent';
import superagentPlugin from '../utils/helpers/superagentPlugin.js';
//const superagent = languagePlugin(superagent_temp);

export function loginError(err) {
	return {
		type: types.AUTH_LOGIN_ERROR,
		err
	};
}

export function authLoginSubmit() {
	return {
		type: types.AUTH_LOGIN_SUBMIT
	};
}

export function configChangePage(page) {
	return {
		type: types.CONFIG_SET_PAGE,
		page
	};
}

export function fatalError(err) {
	return {
		type: types.CONFIG_FATAL_ERROR,
		err
	};
}

export function loginOnChange(key, value) {
	return {
		type: types.AUTH_LOGIN_ONCHANGE,
		key,
		value
	};
}

export function loginSucceeded(token, profile) {
	return {
		type: types.AUTH_LOGIN_SUCCEEDED,
		token,
		profile
	};
}

export function loginSubmit() {
	return(dispatch, getState) => {
		dispatch(authLoginSubmit());
		var state = getState();
		superagent
			.post(state.config.endpoints.login.url)
			.send(state.auth.login)
			.use(superagentPlugin())
			.end(function(err, res) {
				if(err != null) {
					if(err.status === 401) {
						return dispatch(loginError(err));
					} else {
						return dispatch(fatalError(err));
					}
				}
				if(res.body.token == null || typeof res.body.token !== 'string') {
					console.error('Auth token is missing or not a string!');
					return dispatch(loginError());
				}
				if(res.body.profile == null || typeof res.body.profile !== 'object') {
					console.error('Auth profile is missing or not an object!');
					return dispatch(loginError());
				}
				if(res.body.profile.firstname == null || typeof res.body.profile.firstname !== 'string') {
					console.error('Auth profile.firstname is missing or not a string!');
					return dispatch(loginError());
				}
				if(res.body.profile.lastname == null || typeof res.body.profile.lastname !== 'string') {
					console.error('Auth profile.lastname is missing or not a string!');
					return dispatch(loginError());
				}
				if(res.body.profile.avatarUrl == null || typeof res.body.profile.avatarUrl !== 'string') {
					console.error('Auth profile.avatarUrl is missing or not a string!');
					return dispatch(loginError());
				}
				if(res.body.endpoints) {
					dispatch(setEndpoints(res.body.endpoints));
				}
				dispatch(loginSucceeded(res.body.token, res.body.profile));
				dispatch(configChangePage(pageTypes.APP));
			});
	};
}
