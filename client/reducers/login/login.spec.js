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
  user: {
    photoURL: 'randomURL',
    uid: 'id1',
    displayName: 'test',
    email: 'test@test.com',
  },
  credential: {
    accessToken: 'token',
    provider: 'facebook.com',
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
    expect(finalState.get('token')).toEqual(userPayload.credential.accessToken);
    expect(finalState.get('uid')).toEqual(userPayload.user.uid);
    expect(finalState.get('provider')).toEqual(userPayload.credential.provider);
    expect(finalState.getIn(['user', 'displayName'])).toEqual(userPayload.user.displayName);
    expect(finalState.getIn(['user', 'email'])).toEqual(userPayload.user.email);
    expect(finalState.getIn(['user', 'id'])).toEqual(userPayload.user.uid);
    expect(finalState.getIn(['user', 'profileImageURL'])).toEqual(userPayload.user.photoURL);

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
