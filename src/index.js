
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Provider as FelaProvider } from 'react-fela'
import { createRenderer } from 'fela'
import configureStore from './store/configureStore.js'
import App from './containers/App.js'
import felaConfig from './felaConfig'

const store = configureStore()

const renderer = createRenderer(felaConfig)
const mountNode = document.getElementById('stylesheet')

render(
  <Provider store={ store }>
    <FelaProvider renderer={ renderer } mountNode={ mountNode }>
      <App />
    </FelaProvider>
  </Provider>,
  document.getElementById('root')
)
