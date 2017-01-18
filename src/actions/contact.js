import * as types from '../constants/ActionTypes.js'
import superagent from 'superagent'

export function increaseSendState(number) {
	if (number == null || typeof number !== 'number') {
		var number = 1
	}
	return {
		type: types.INCREASE_SEND_STATE,
		number
	}
}

export function toggleCustomerSpecific() {
	return {
		type: types.TOGGLE_CUSTOMER_SPECIFIC
	}
}

export function setFormData(field, value) {
	return {
		type: types.SET_FORM_DATA,
		field,
		value
	}
}

export function sendContactRequest() {
	return (dispatch, getState) => {
		var state = getState()
		if (state.blocks.contactForm.state === 0) {
			dispatch(increaseSendState())
			return superagent
				.get('/sendMail.php')
				.query(state.blocks.contactForm)
				.end(function(err, res) {
					if (err || res.text !== 'Mailed!') {
						return dispatch(increaseSendState(2))
					}
					dispatch(increaseSendState())
				})
		}
	}
}
