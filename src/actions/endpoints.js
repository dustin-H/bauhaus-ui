import languagePlugin from '../utils/i18n/plugin.js';

export function setEndpoints(endpoints) {
	return {
		type: types.SET_ENDPOINTS,
		endpoints
	};
}
