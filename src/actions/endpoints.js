import languagePlugin from '../utils/i18n/plugin.js';
import * as types from '../constants/ActionTypes.js';

export function setEndpoints(endpoints) {
	return {
		type: types.SET_ENDPOINTS,
		endpoints
	};
}
