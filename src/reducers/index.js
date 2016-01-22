import { combineReducers } from 'redux';
import auth from './auth.js';
import i18n from './i18n.js';
import config from './config.js';
import router from './router.js';
import sideBar from './sideBar.js';

const rootReducer = combineReducers({
  i18n,
  config,
  auth,
  router,
  sideBar
  //components
});

export default rootReducer;
