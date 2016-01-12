import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

// Reducers
import todos from './todos-reducer.js';
import login from './login-reducer.js';
import modals from './modals-reducer.js';
import viewport from './viewport-reducer.js';
import visibilityFilter from './visibility-filter-reducer.js';

const app = combineReducers({
  viewport: viewport,
  todos: todos,
  visibilityFilter: visibilityFilter,
  routing: routeReducer,
  modals: modals,
  session: login,
});

export default app;
