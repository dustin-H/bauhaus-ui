import {SEND_CONTACT_REQUEST} from '../constants/ActionTypes';

const initialState = require('../data/initialData.js')

export default function todos(state = initialState, action) {
	switch (action.type) {
	case SEND_CONTACT_REQUEST :
		return state.map(todo => todo.id === action.id
			? Object.assign({}, todo, {
				text : action.text
			})
			: todo);

	default :
		return state;
	}
}
