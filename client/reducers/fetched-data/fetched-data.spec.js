import expect from 'expect';
import {fetchedDataReducer, initialState} from './fetched-data.js';
import { REQUEST_DATA, RECEIVE_DATA, FAIL_DATA } from 'fetch.js';

// Check data structure
const checkFetchedDataReducer = (state) => {
  expect(Immutable.Map.isMap(state)).toEqual(true);
  expect(state.size).toEqual(3);
  expect(state.get('isLoading')).toBeA('boolean');
  expect(state.get('error')).toBeA('string');
  expect(Immutable.Map.isMap(state.get('data'))).toEqual(true);
};

describe('fetch data reducer', () => {
  it('should return the initial state', () => {
    expect(fetchedDataReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle REQUEST_DATA', () => {
    const finalState = fetchedDataReducer(initialState, {type: REQUEST_DATA});

    expect(finalState.get('isLoading')).toEqual(true);
    checkFetchedDataReducer(finalState);
  });
  it('should handle FAIL_DATA', () => {
    const firstState = fetchedDataReducer(initialState, {type: REQUEST_DATA});
    const finalState = fetchedDataReducer(firstState, {type: FAIL_DATA, data: 'error'});

    expect(finalState.get('isLoading')).toEqual(false);
    expect(finalState.get('error')).toEqual('error');
    expect(finalState.get('data').size).toEqual(0);
    checkFetchedDataReducer(finalState);
  });
  it('should handle RECEIVE_DATA', () => {
    const firstState = fetchedDataReducer(initialState, {type: REQUEST_DATA});
    const finalState = fetchedDataReducer(firstState, {type: RECEIVE_DATA, data: {randomField: 1}});

    expect(finalState.get('isLoading')).toEqual(false);
    expect(finalState.get('error')).toEqual('');
    expect(finalState.get('data').size).toEqual(1);
    expect(finalState.getIn(['data', 'randomField'])).toEqual(1);
    checkFetchedDataReducer(finalState);
  });
});
