import * as types from '../constants/ActionTypes.js';
import * as pageTypes from '../constants/PageTypes.js';

const initialState = {
	page: 'LOADING',
	loaded: false,
	config: [],
	header: 'Authorization',
	token: localStorage.getItem('token') || '',
	list: {
		config: {
			url: 'config.json',
			loaded: false,
			loading: false
		},
		entry: {
			url: '/',
			loaded: false,
			loading: false
		},
		views: {
			url: '/views',
			loaded: false,
			loading: false
		},
		sideBar: {
			url: '/sideBar',
			loaded: false,
			loading: false
		},
		search: {
			url: '/search',
		},
		login: {
			url: '/login',
		},
		logout: {
			url: '/logout',
		}
	}
};

export default function i18n(state = initialState, action) {
	switch(action.type) {
		case types.CONFIG_SET_PAGE:
			if(pageTypes[action.page] != null) {
				var newState = Object.assign({}, state);
				newState.page = action.page;
				return newState;
			} else {
				return state;
			}
		case types.CONFIG_REMOVE_FIRST_URL:
			var newState = Object.assign({}, state);
			newState.config.shift();
			return newState;
		case types.CONFIG_LOADED:
			var newState = Object.assign({}, state);
			newState.loaded = true;
			newState.page = pageTypes.LOGIN;
			return newState;
		case types.CONFIG_LOAD_ERROR:
			var newState = Object.assign({}, state);
			newState.page = pageTypes.ERROR;
			return newState;
		case types.CONFIG_ADD_URLS:
			var newState = Object.assign({}, state);
			newState.config = newState.config.concat(action.configUrls);
			return newState;
		case types.CONFIG_SET_ENDPOINTS:
			if(pageTypes[action.page] != null) {
				var newState = Object.assign({}, state);
				newState.page = action.page;
				return newState;
			} else {
				return state;
			}
		default:
			return state;
	}
}
