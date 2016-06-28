import expect from 'expect';
import { initialState, modalsReducer } from './modals.js';
import { OPEN_MODAL_LOGIN, CLOSE_MODAL_LOGIN } from 'modals.js';

// Check data structure
const checkModalsReducer = (state) => {
  expect(Immutable.Map.isMap(state)).toEqual(true);
  expect(state.size).toEqual(1);
  expect(state.get('isLoginModalOpen')).toBeA('boolean');
};

describe('modal reducer', () => {
  it('should return the initial state', () => {
    expect(modalsReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle OPEN_MODAL_LOGIN', () => {
    const finalState = modalsReducer(initialState, {type: OPEN_MODAL_LOGIN});
    expect(finalState.get('isLoginModalOpen')).toEqual(true);
    checkModalsReducer(finalState);
  });
  it('should handle CLOSE_MODAL_LOGIN', () => {
    const firstState = modalsReducer(initialState, {type: OPEN_MODAL_LOGIN});
    const finalState = modalsReducer(firstState, {type: CLOSE_MODAL_LOGIN});
    expect(finalState.get('isLoginModalOpen')).toEqual(false);
    checkModalsReducer(finalState);
  });
});

