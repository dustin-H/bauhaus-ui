import * as types from '../constants/ActionTypes.js'
import superagent from 'superagent'
import superagentPlugin from '../utils/helpers/superagentPlugin.js'
//const superagent = languagePlugin(superagent_temp)

import {
	checkLogin
}
from './auth.js'

export function addUrls(configUrls) {
	return {
		type: types.CONFIG_ADD_URLS,
		configUrls
	}
}

export function changePage(page) {
	return {
		type: types.CONFIG_SET_PAGE,
		page
	}
}

export function loaded() {
	return {
		type: types.CONFIG_LOADED
	}
}

export function removeFirstUrl() {
	return {
		type: types.CONFIG_REMOVE_FIRST_URL
	}
}

export function loadError(err, configUrl) {
	return {
		type: types.CONFIG_LOAD_ERROR,
		err,
		configUrl
	}
}

export function setEndpoints(endpoints) {
	return {
		type: types.CONFIG_SET_ENDPOINTS,
		endpoints
	}
}

export function load() {
	return(dispatch, getState) => {
		var state = getState().config
		if(state.config.length > 0 && state.loaded === false) {
			var configUrl = state.config[0]
			dispatch(removeFirstUrl())
			superagent
				.get(configUrl)
				//.set('Accept', 'application/json')
				.accept('json')
				.use(superagentPlugin())
				.end(function(err, res) {
					if(err != null) {
						return dispatch(loadError(err, configUrl))
					}
					if(res.body.endpoints) {
						dispatch(setEndpoints(res.body.endpoints))
					}
					if(res.body.configUrls) {
						dispatch(addUrls(res.body.configUrls))
					}
					dispatch(load())
				})
		} else {
			dispatch(loaded())
         dispatch(checkLogin())
		}
	}
}
