import * as types from '../constants/ActionTypes.js'

export function parseLanguage(list, url) {
  return {
    type: types.I18N_PARSE_LANGUAGE,
    list,
    url
  }
}
export function addFallbacks(fallbacks) {
  return {
    type: types.I18N_ADD_FALLBACKS,
    fallbacks
  }
}
export function clearFallbacks() {
  return {
    type: types.I18N_CLEAR_FALLBACKS
  }
}
