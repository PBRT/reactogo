import { REQUEST_DATA, RECEIVE_DATA, FAIL_DATA } from 'fetch.js';

export const initialState = Immutable.Map({
  isLoading: false,
  data: Immutable.Map(),
  error: '',
});

export const fetchedDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case (REQUEST_DATA): return state.set('isLoading', true);
    case (FAIL_DATA): return Immutable.fromJS({
      isLoading: false,
      error: action.data,
      data: {},
    });
    case (RECEIVE_DATA): return Immutable.fromJS({
      isLoading: false,
      data: action.data,
      error: '',
    });
    default: return state;
  }
};
