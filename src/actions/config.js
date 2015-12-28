import languagePlugin from '../utils/i18n/plugin.js';

export function addUrls(configUrls) {
	return {
		type: types.CONFIG_ADD_URLS,
		configUrls
	};
}

export function loaded() {
	return {
		type: types.CONFIG_LOADED
	};
}

export function removeFirstUrl() {
	return {
		type: types.CONFIG_REMOVE_FIRST_URL
	};
}

export function loadError(err, configUrl) {
	return {
		type: types.CONFIG_LOAD_ERROR,
		err,
      configUrl
	};
}

export function setEndpoints(endpoints) {
	return {
		type: types.CONFIG_SET_ENDPOINTS,
		endpoints
	};
}

export function load() {
	return(dispatch, getState) => {
		var state = getState().endpoints;
		if(state.config.length > 0) {
         var configUrl = state.config[0];
			return superagent
				.get(configUrl)
				.use(languagePlugin)
				.end(function(err, res) {
					if(err) {
						return loadError(err, configUrl);
					}
					if(res.body.endpoints) {
						dispatch(setEndpoints(res.body.endpoints));
					}
					if(res.body.configUrls) {
						dispatch(addUrls(res.body.configUrls));
					}
					dispatch(load());
				});
			dispatch(removeFirstUrl());
		} else {
			dispatch(loaded());
		}
	};
}
