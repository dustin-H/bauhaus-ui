import * as types from '../constants/ActionTypes.js'

try {
   var profile = JSON.parse(localStorage.getItem('profile'))
} catch(e){}

const initialState = {
	header: 'Authorization',
	token: localStorage.getItem('token') || '',
   loginLoading: false,
	login: {
		username: '',
		password: '',
	},
	profile: profile || {
		firstname: '',
		lastname: '',
		avatarUrl: ''
	},
   error: false
}

export default function auth(state = initialState, action) {
	switch(action.type) {
		case types.AUTH_LOGIN_SUBMIT:
			var newState = Object.assign({}, state)
         newState.loginLoading = true
			return newState
		case types.AUTH_LOGIN_ONCHANGE:
			if(action.key != null && action.value != null && (action.key === 'username' || action.key === 'password')) {
				var newState = Object.assign({}, state)
				newState.login[action.key] = action.value
				return newState
			} else {
				return state
			}
		case types.AUTH_LOGOUT:
			var newState = Object.assign({}, state)

			return newState
		case types.AUTH_LOGIN_ERROR:
			var newState = Object.assign({}, state)
         newState.error = true
         newState.loginLoading = false
			return newState
		case types.AUTH_LOGIN_SUCCEEDED:
			var newState = Object.assign({}, state)
			newState.header = action.header || newState.header
			newState.token = action.token
			newState.profile = action.profile
         newState.loginLoading = false
			localStorage.setItem('token', action.token)
			localStorage.setItem('profile', JSON.stringify(action.profile))
			return newState
		default:
			return state
	}
}
