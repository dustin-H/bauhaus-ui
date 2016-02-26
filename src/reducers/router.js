import * as types from '../constants/ActionTypes.js'

const initialState = {
	location: {},
	routes: {},
   route: false,
	loading: false,
   error: false,
   contentState: {}
}

export default function router(state = initialState, action) {
	switch(action.type) {
		case types.ROUTER_LOCATION_CHANGED:
			var newState = Object.assign({}, state)
			newState.location = action.location
			newState.route = action.route
			newState.error = false
      console.log('reset content State');
      newState.contentState = {}
			return newState
		case types.ROUTER_SET_ROUTES:
			var newState = Object.assign({}, state)
			newState.routes = action.routes
			newState.route = action.route
			newState.loading = false
			newState.error = false
			return newState
		case types.ROUTER_SET_LOADING:
			var newState = Object.assign({}, state)
			newState.loading = true
			newState.error = false
			return newState
		case types.ROUTER_SHOW_ERROR:
			var newState = Object.assign({}, state)
			newState.error = true
			newState.loading = false
			return newState
		case types.ROUTER_SET_CONTENT_STATE:
			var newState = Object.assign({}, state)
			newState.contentState[action.key] = Object.assign({}, action.state);
			return newState
		default:
			return state
	}
}
