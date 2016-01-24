import { combineReducers } from 'redux';
import auth from './auth.js';
import i18n from './i18n.js';
import config from './config.js';
import router from './router.js';
import sideBar from './sideBar.js';
import content from './content.js';

const rootReducer = combineReducers({
  i18n,
  config,
  auth,
  router,
  sideBar,
  content
  //components
});

export default rootReducer;
