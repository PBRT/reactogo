import expect from 'expect';
import { initialState, sideMenuReducer } from './side-menu.js';
import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from 'side-menu.js';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SET_VIEWPORT } from 'viewport.js';
import { SUCCESS_LOGIN, SUCCESS_LOGOUT } from 'auth/login.js';

// Check data structure
const checkSideMenuReducer = (state) => {
  expect(Immutable.Map.isMap(state)).toEqual(true);
  expect(state.size).toEqual(1);
  expect(state.get('isSideMenuOpen')).toBeA('boolean');
};

describe('side menu reducer', () => {
  it('should return the initial state', () => {
    expect(sideMenuReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle OPEN_SIDE_MENU', () => {
    const finalState = sideMenuReducer(initialState, {type: OPEN_SIDE_MENU});
    expect(finalState.get('isSideMenuOpen')).toEqual(true);
    checkSideMenuReducer(finalState);
  });
  it('should handle CLOSE_SIDE_MENU', () => {
    const finalState = sideMenuReducer(initialState, {type: CLOSE_SIDE_MENU});
    expect(finalState.get('isSideMenuOpen')).toEqual(false);
    checkSideMenuReducer(finalState);
  });
  it('should handle SET_VIEWPORT', () => {
    const finalState = sideMenuReducer(initialState, {type: SET_VIEWPORT});
    expect(finalState.get('isSideMenuOpen')).toEqual(false);
    checkSideMenuReducer(finalState);
  });
  it('should handle LOCATION_CHANGE', () => {
    const finalState = sideMenuReducer(initialState, {type: LOCATION_CHANGE});
    expect(finalState.get('isSideMenuOpen')).toEqual(false);
    checkSideMenuReducer(finalState);
  });
  it('should handle SUCCESS_LOGOUT', () => {
    const finalState = sideMenuReducer(initialState, {type: SUCCESS_LOGOUT});
    expect(finalState.get('isSideMenuOpen')).toEqual(false);
    checkSideMenuReducer(finalState);
  });
  it('should handle SUCCESS_LOGIN', () => {
    const finalState = sideMenuReducer(initialState, {type: SUCCESS_LOGIN});
    expect(finalState.get('isSideMenuOpen')).toEqual(false);
    checkSideMenuReducer(finalState);
  });
});

