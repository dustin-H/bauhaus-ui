import * as types from '../constants/ActionTypes.js'

var preInitialState = {
  width: window.innerWidth || 1080,
  mobile: false, // window.orientation != null
  centerDesign: true,
  device: {
    smartphone: false,
    tablet: false,
    desktop: true
  },
  breakpoints: {
    smartphone: 460,
    tablet: 1024,
    desktop: Infinity
  }
}

const detect = function(state) {
  for (var i in state.device) {
    state.device[i] = false
  }
  for (var i in state.breakpoints) {
    if (state.width <= state.breakpoints[i] && state.device[i] != null) {
      state.device[i] = true
      return state
    }
  }
  state.device.desktop = true
  return state
}

const initialState = detect(preInitialState)

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case types.RESPONSIVE_CHANGE_WIDTH:
      var newState = Object.assign({}, state)
      newState.width = action.width
      return detect(newState)
    default:
      return state
  }
}
