import createHistory from 'history/createHashHistory'
import * as types from '../constants/ActionTypes.js'
import { get } from '../store/store.js'
import superagent from 'superagent'
import utils from '../utils'

let history = {}

superagent.get('api/config').end((err, res) => {
  if (err != null) {
    get().dispatch(setLoading('config', false))
    return alert('Failed to load config!')
  }
  get().dispatch(setConfig(res.body))
  history = createHistory()

  history.listen(function(location) {
    get().dispatch(locationChanged(location))
  })
  get().dispatch(locationChanged(history.location))
  get().dispatch(setLoading('config', false))
})

var locationRequest = null

function locationChanged(location) {
  return (dispatch, getState) => {
    dispatch({
      type: types.CONTENT_SET_LOCATION,
      location
    })
    console.log('LOCATION', location)
    var p = location.pathname.split('/')
    if (p.length === 3) {
      dispatch(setLoading('content', true))
      try {
        locationRequest.abort()
      } catch(e) {}
      locationRequest = utils.callMethod(p[1] + '/' + p[2], location.search, (err, data) => {
        dispatch(setContent(err, data))
        dispatch(setLoading('content', false))
      })
    } else {
      var state = getState()
      dispatch(pushLocation(state.content.config.rootRoute))
    }

    //dispatch(setLoading())
    var state = getState()
  }
}

function setLoading(source, bool) {
  return {
    type: types.CONTENT_SET_LOADING,
    source,
    bool
  }
}

function setConfig(config) {
  return {
    type: types.CONTENT_SET_CONFIG,
    config
  }
}

function setContent(error, content) {
  return {
    type: types.CONTENT_SET_CONTENT,
    error,
    content
  }
}

export function pushLocation(location) {
  return (dispatch, getState) => {
    history.push(location)
  }
}
