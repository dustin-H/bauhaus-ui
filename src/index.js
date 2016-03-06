
import core from './core'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import App from './containers/App.js'

import thestore from './store/store.js'
const store = thestore

import { LookRoot, Presets } from 'react-look'
// const customConfig = Presets['react-dom']

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
  <LookRoot config={Presets['react-dom']}>
      <Provider store={store}>
         <App />
      </Provider>
   </LookRoot>,
  document.getElementById('root')
)
