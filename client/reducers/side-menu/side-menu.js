import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from 'side-menu.js';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SET_VIEWPORT } from 'viewport.js';
import { SUCCESS_LOGIN, SUCCESS_LOGOUT } from 'auth/login.js';

export const initialState = Immutable.Map({
  isSideMenuOpen: false,
});

export const sideMenuReducer = (state = initialState, action) => {
  switch(action.type) {
    case (OPEN_SIDE_MENU): return state.set('isSideMenuOpen', true);
    case (CLOSE_SIDE_MENU): return state.set('isSideMenuOpen', false);
    case (SET_VIEWPORT): return state.set('isSideMenuOpen', false);
    case (LOCATION_CHANGE): return state.set('isSideMenuOpen', false);
    case (SUCCESS_LOGOUT): return state.set('isSideMenuOpen', false);
    case (SUCCESS_LOGIN): return state.set('isSideMenuOpen', false);
    default: return state;
  }
};
