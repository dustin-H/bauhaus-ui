import {
	SEND_CONTACT_REQUEST,
	TOGGLE_CUSTOMER_SPECIFIC,
	SET_FORM_DATA,
	INCREASE_SEND_STATE
}
from '../constants/ActionTypes'
var objectAssign = require('object-assign')


const initialState = require('../data/initialData.js')

export default function todos(state = initialState, action) {
	switch (action.type) {
		case SEND_CONTACT_REQUEST:
			return objectAssign({}, state)
		case TOGGLE_CUSTOMER_SPECIFIC:
			var nState = objectAssign({}, state, {
				cFolded: !state.cFolded
			})
			return nState
		case SET_FORM_DATA:
			var nState = objectAssign({}, state)
			if (action.field && (action.field === 'name' ||  action.field === 'email'  || action.field === 'message')) {
				nState.contactForm[action.field] = action.value
			}
			return nState
		case INCREASE_SEND_STATE:
			var nState = objectAssign({}, state)
			nState.contactForm.state += action.number
			return nState
		default:
			return state
	}
}
