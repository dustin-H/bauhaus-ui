import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

/*const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  applyMiddleware(createLogger()),
  devTools()
)(createStore);*/

const finalCreateStore = createStore;

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
