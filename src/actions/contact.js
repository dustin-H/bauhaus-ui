import * as types from '../constants/ActionTypes.js';

export function sendContactRequest(name, email, text) {
	return {
		type: types.SEND_CONTACT_REQUEST,
		name,
		email,
		text
	};
}
