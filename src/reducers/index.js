import { combineReducers } from 'redux';
import blocks from './blocks';
import auth from './auth.js';
import endpoints from './endpoints.js';
import i18n from './i18n.js';
import config from './config.js';

const rootReducer = combineReducers({
  endpoints,
  i18n,
  config,
  auth
  //components
});

export default rootReducer;
