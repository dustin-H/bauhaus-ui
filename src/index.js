
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import App from './containers/App.js';

import thestore from './store/store.js';
const store = thestore;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
