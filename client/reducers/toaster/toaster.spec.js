import expect from 'expect';

import { initialState, toastersReducer } from './toaster.js';
import { ADD_MESSAGE, REMOVE_MESSAGE} from 'toaster.js';

// Check data structure
const checkToasterReducer = (state) => {
  expect(Immutable.List.isList(state)).toEqual(true);
};

describe('toaster reducer', () => {
  it('should return the initial state', () => {
    expect(toastersReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle ADD_MESSAGE', () => {
    const finalState = toastersReducer(initialState, {type: ADD_MESSAGE, message: {
      text: 'test',
      id: 0,
      type: 'success'
    }});
    //REALLY UGLY
    expect(finalState.toJS()[0].text).toEqual('test');
    expect(finalState.size).toEqual(1);
    checkToasterReducer(finalState);
  });
  it('should handle REMOVE_MESSAGE', () => {
    const firstState = toastersReducer(initialState, {type: ADD_MESSAGE, message: {
      text: 'test',
      id: 0,
      type: 'success'
    }});
    const finalState = toastersReducer(firstState, {type: REMOVE_MESSAGE, id: 0});
    expect(finalState.size).toEqual(0);
    checkToasterReducer(finalState);
  });
});
