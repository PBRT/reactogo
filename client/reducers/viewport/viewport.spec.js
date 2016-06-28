import expect from 'expect';
import {viewportReducer, initialState} from './viewport.js';
import { SET_VIEWPORT } from 'viewport.js';

const checkViewportStructure = (state) => {
  expect(Immutable.Map.isMap(state)).toEqual(true);
  expect(state.size).toEqual(4);
};

describe('viewport reducer', () => {
  it('should return the initial state', () => {
    expect(viewportReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SET_VIEWPORT for mobile', () => {
    const finalState = viewportReducer(initialState, {
      type: SET_VIEWPORT,
      width: 500,
    });

    expect(finalState.get('isMobile')).toEqual(true);
    expect(finalState.get('isTablet')).toEqual(false);
    expect(finalState.get('isDesktop')).toEqual(false);
    expect(finalState.get('isTouchDevice')).toEqual(true);

    checkViewportStructure(finalState);
  });
  it('should handle SET_VIEWPORT for tablet', () => {
    const finalState = viewportReducer(initialState, {
      type: SET_VIEWPORT,
      width: 800,
    });

    expect(finalState.get('isMobile')).toEqual(false);
    expect(finalState.get('isTablet')).toEqual(true);
    expect(finalState.get('isDesktop')).toEqual(false);
    expect(finalState.get('isTouchDevice')).toEqual(true);

    checkViewportStructure(finalState);
  });
  it('should handle SET_VIEWPORT for desktop', () => {
    const finalState = viewportReducer(initialState, {
      type: SET_VIEWPORT,
      width: 1100,
    });

    expect(finalState.get('isMobile')).toEqual(false);
    expect(finalState.get('isTablet')).toEqual(false);
    expect(finalState.get('isDesktop')).toEqual(true);
    expect(finalState.get('isTouchDevice')).toEqual(true);

    checkViewportStructure(finalState);
  });
  it('should handle SET_VIEWPORT from desktop to mobile', () => {
    const firstState = viewportReducer(initialState, {
      type: SET_VIEWPORT,
      width: 1100,
    });

    const finalState = viewportReducer(firstState, {
      type: SET_VIEWPORT,
      width: 700,
    });

    expect(finalState.get('isMobile')).toEqual(true);
    expect(finalState.get('isTablet')).toEqual(false);
    expect(finalState.get('isDesktop')).toEqual(false);
    expect(finalState.get('isTouchDevice')).toEqual(true);

    checkViewportStructure(finalState);
  });
  it('should handle SET_VIEWPORT from mobile to tablet', () => {
    const firstState = viewportReducer(initialState, {
      type: SET_VIEWPORT,
      width: 700,
    });

    const finalState = viewportReducer(firstState, {
      type: SET_VIEWPORT,
      width: 900,
    });

    expect(finalState.get('isMobile')).toEqual(false);
    expect(finalState.get('isTablet')).toEqual(true);
    expect(finalState.get('isDesktop')).toEqual(false);
    expect(finalState.get('isTouchDevice')).toEqual(true);

    checkViewportStructure(finalState);
  });
});
