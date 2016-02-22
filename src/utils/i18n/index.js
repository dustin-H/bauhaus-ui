import store from '../../store/store.js'
import loader from './loader.js'

import {
	addFallbacks,
	clearFallbacks
}
from '../../actions/i18n.js'

export function $(id) {
   if(typeof id !== 'string' || id[0] !== '$'){
      return id
   } else {
      id = id.substr(1)
   }
	var state = store.getState().i18n
	for(var i in state.languages) {
		if(state.store[state.languages[i]][id] != null) {
			return state.store[state.languages[i]][id]
		}
	}
	for(var i in state.store) {
		if(state.store[i][id] != null) {
			return state.store[i][id]
		}
	}
	setTimeout(function() {
		var state = store.getState().i18n
		if(state.fallbacks.length > 0) {
			var fallbacks = state.fallbacks
			store.dispatch(clearFallbacks())
			loader(fallbacks, function() {})
		}
	}, 0)
	console.error('Could not get i18n text of id [', id, ']!')
	return id
}

export function loadLanguagePacks(packs, cb) {
	console.log('loadLanguagePacks')
	var k = 0
	for(var i in packs) {
		k++
		loadLanguages(packs[i], function() {
			k--
			if(k < 1) {
				cb()
			}
		})
	}
}

export function loadLanguages(pack, cb) {
	if(Object.keys(pack).length > 0) {
		var state = store.getState().i18n
		var loadNow = null
		var fallbacks = []
		var isComplete = false
		for(var i in state.languages) {
			if(pack[state.languages[i]] != null) {
				if(loadNow == null) {
					var loadNow = pack[state.languages[i]].url
					if(pack[state.languages[i]].complete === true) {
						isComplete = true
						break
					}
				} else {
					if(pack[state.languages[i]].complete === true) {
						isComplete = true
						fallbacks.push(pack[state.languages[i]].url)
						break
					}
				}
			}
		}
		if(loadNow == null) {
			var chosen = null
			for(var i in pack) {
				if(pack[i].complete === true && (loadNow == null || (loadNow != null && i === 'en'))) {
					chosen = i
					isComplete = true
					loadNow = pack[i].url
					if(i === 'en') {
						break
					}
				}
			}
		}
		if(loadNow == null) {
			for(var i in pack) {
				if(loadNow == null || (loadNow != null && i === 'en')) {
					isComplete = true
					loadNow = pack[i].url
					if(i === 'en') {
						break
					}
				}
			}
		}
		if(isComplete === false) { // Search for a complete language package
			var lUrl = null
			for(var i in pack) {
				if(pack[i].complete === true && (isComplete === false || (isComplete === true && i === 'en'))) {
					isComplete = true
					lUrl = pack[i].url
					if(i === 'en') {
						break
					}
				}
			}
			if(lUrl != null) {
				fallbacks.push(lUrl)
			}
		}
		var toLoad = [loadNow]
		if(state.fallbackMode === true) {
			toLoad = toLoad.concat(fallbacks)
		} else {
			store.dispatch(addFallbacks(fallbacks))
		}
		loader(toLoad, cb)
	} else {
		cb()
	}
}
