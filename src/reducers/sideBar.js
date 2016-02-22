import * as types from '../constants/ActionTypes.js'

const initialState = {
	list: [],
	loading: false,
   smallSize: 60,
   bigSize: 280,
   show: true
}

export default function sidebar(state = initialState, action) {
	switch(action.type) {
		case types.SIDEBAR_SET_LIST:
			var newState = Object.assign({}, state)
         newState.list = action.list
			newState.loading = false
			newState.error = false
			return newState
		case types.SIDEBAR_SET_LOADING:
			var newState = Object.assign({}, state)
			newState.loading = true
			newState.error = false
			return newState
		case types.SIDEBAR_SHOW_ERROR:
			var newState = Object.assign({}, state)
			newState.error = true
			newState.loading = false
			return newState
		case types.SIDEBAR_TOGGLE_SHOW:
			var newState = Object.assign({}, state)
			newState.show = !newState.show
			return newState
		default:
			return state
	}
}
