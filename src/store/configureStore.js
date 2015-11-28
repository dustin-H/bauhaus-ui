import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

import thunkMiddleware from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore);

//const finalCreateStore = createStore;

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
