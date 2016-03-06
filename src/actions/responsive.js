import * as types from '../constants/ActionTypes.js'
import store from '../store/store.js'

window.onresize = function(e) {
  store.dispatch(changeWidth(window.innerWidth))
}

export function changeWidth(width) {
  return {
    type: types.RESPONSIVE_CHANGE_WIDTH,
    width
  }
}
