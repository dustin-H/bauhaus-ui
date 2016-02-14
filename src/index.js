
import registerModules from './modules/registerModules.js';
registerModules();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import App from './containers/App.js';

import thestore from './store/store.js';
const store = thestore;



import { LookRoot, Presets } from 'react-look';
// const customConfig = Presets['react-dom'];

render(
  <LookRoot config={Presets['react-dom']}>
      <Provider store={store}>
         <App />
      </Provider>
   </LookRoot>,
  document.getElementById('root')
);
