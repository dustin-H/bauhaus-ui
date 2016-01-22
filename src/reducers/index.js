import { combineReducers } from 'redux';
import blocks from './blocks';
import auth from './auth.js';
import i18n from './i18n.js';
import config from './config.js';
import router from './router.js';

const rootReducer = combineReducers({
  i18n,
  config,
  auth,
  router
  //components
});

export default rootReducer;
