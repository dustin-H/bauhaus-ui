import * as types from '../constants/ActionTypes'
var objectAssign = require('object-assign')

const initialState = {
  content: {},
  error: {},
  location: {},
  config: {},
  loading: {
    config: true,
    content: false,
    modules: false
  }
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.CONTENT_SET_CONFIG:
      return objectAssign({}, state, {
        config: action.config
      })
    case types.CONTENT_SET_CONTENT:
      return objectAssign({}, state, {
        content: action.content,
        error: action.error
      })
    case types.CONTENT_SET_LOCATION:
      return objectAssign({}, state, {
        location: action.location
      })
    case types.CONTENT_SET_LOADING:
      var newState = objectAssign({}, state)
      newState.loading[action.source] = action.bool
      return newState
    default:
      return state
  }
}
