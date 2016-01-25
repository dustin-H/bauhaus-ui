import * as types from '../constants/ActionTypes.js';
import * as pageTypes from '../constants/PageTypes.js';

const initialState = {
	page: 'LOADING',
	loaded: false,
   loadState: {
      entry: false,
      sideBar: false,
      views: false
   },
	config: ['config.json'],
	endpoints: {
		/*entry: {
			url: '/api'
		},
		views: {
			url: '/api/views'
		},
		sideBar: {
			url: '/api/sideBar'
		},
		search: {
			url: '/api/search',
		},
		login: {
			url: '/api/login',
		},
		logout: {
			url: '/api/logout',
		}*/
	}
};

export default function config(state = initialState, action) {
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
			//newState.page = pageTypes.LOGIN;
			return newState;
		case types.CONFIG_FATAL_ERROR:
			var newState = Object.assign({}, state);
         console.error('Fatal Error:', action.err);
			newState.page = pageTypes.ERROR;
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
			var newState = Object.assign({}, state, {});
			for(var i in action.endpoints) {
				newState.endpoints[i] = action.endpoints[i];
			}
			return newState;
		default:
			return state;
	}
}
