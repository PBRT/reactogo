// Redux
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

// Reducers
import appReducer from '../reducers/reducers.js';

// Actions
import { setViewport } from 'viewport.js';


const stateTransformer = (state) => state.toJS();

let store;

export function initializeStore() {

  const logger = createLogger({stateTransformer});
  const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);

  store = createStoreWithMiddleware(appReducer);
  store.dispatch(setViewport(window.innerWidth));

  return store;

};

export function getStore() {
  return store;
};
