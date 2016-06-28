import expect from 'expect';
import {loginReducer, initialState} from './login.js';
import { SUCCESS_LOGIN, FAIL_LOGIN, SUCCESS_LOGOUT } from 'auth/login.js';

// Check data structure
const checkLoginReducer = (state) => {
  expect(Immutable.Map.isMap(state)).toEqual(true);
  expect(state.size).toEqual(5);
  expect(state.get('token')).toBeA('string');
  expect(state.get('uid')).toBeA('string');
  expect(state.get('provider')).toBeA('string');
  expect(state.get('isLoggedIn')).toBeA('boolean');
  expect(Immutable.Map.isMap(state.get('user'))).toEqual(true);
};

const genUserPayload = () => ({
  uid: 'id1',
  token: 'token',
  provider: 'facebook',
  facebook: {
    displayName: 'test',
    email: 'test@test.com',
    id: 'id1',
    profileImageURL: 'randomURL',
  },
});

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle FAIL_LOGIN', () => {
    const finalState = loginReducer(initialState, {type: FAIL_LOGIN});
    expect(finalState).toEqual(initialState);
    checkLoginReducer(finalState);
  });
  it('should handle SUCCESS_LOGIN', () => {
    const userPayload = genUserPayload();

    const finalState = loginReducer(initialState, {
      type: SUCCESS_LOGIN,
      payload: userPayload,
    });

    expect(finalState.get('isLoggedIn')).toEqual(true);
    expect(finalState.get('token')).toEqual(userPayload.token);
    expect(finalState.get('uid')).toEqual(userPayload.uid);
    expect(finalState.get('provider')).toEqual(userPayload.provider);
    expect(finalState.getIn(['user', 'displayName'])).toEqual(userPayload.facebook.displayName);
    expect(finalState.getIn(['user', 'email'])).toEqual(userPayload.facebook.email);
    expect(finalState.getIn(['user', 'id'])).toEqual(userPayload.facebook.id);
    expect(finalState.getIn(['user', 'profileImageURL'])).toEqual(userPayload.facebook.profileImageURL);

    checkLoginReducer(finalState);
  });
  it('should handle SUCCESS_LOGOUT', () => {
    const userPayload = genUserPayload();

    const firstState = loginReducer(initialState, {
      type: SUCCESS_LOGIN,
      payload: userPayload,
    });
    const finalState = loginReducer(firstState, {type: SUCCESS_LOGOUT});
    expect(finalState).toEqual(initialState);
    checkLoginReducer(finalState);
  });

});
