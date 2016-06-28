import { combineReducers } from 'redux-immutable';

// Reducers
import { loginReducer } from './login/login.js';
import { modalsReducer } from './modals/modals.js';
import { viewportReducer } from './viewport/viewport.js';
import { fetchedDataReducer } from './fetched-data/fetched-data.js';
import { toastersReducer } from './toaster/toaster.js';
import { sideMenuReducer } from './side-menu/side-menu.js';
import routeReducer from './route-reducer.js';

const app = combineReducers({
  viewport: viewportReducer,
  routing: routeReducer,
  modals: modalsReducer,
  session: loginReducer,
  toasters: toastersReducer,
  sideMenu: sideMenuReducer,
  fetchedData: fetchedDataReducer,
});

export default app;
