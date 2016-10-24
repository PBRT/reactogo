import { SUCCESS_LOGIN, FAIL_LOGIN, SUCCESS_LOGOUT } from 'auth/login.js';

export const initialState = Immutable.fromJS({
  token: '',
  uid: '',
  provider: '',
  user: {},
  isLoggedIn: false,
});

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case (SUCCESS_LOGIN): return Immutable.fromJS({
      isLoggedIn: true,
      uid: action.payload.user.uid,
      token: action.payload.credential.accessToken,
      provider: action.payload.credential.provider,
      user: Object.assign({}, state.user, {
        displayName: action.payload.user.displayName,
        email: action.payload.user.email,
        id: action.payload.user.uid,
        profileImageURL: action.payload.user.photoURL,
      }),
    });
    case (FAIL_LOGIN): return initialState;
    case (SUCCESS_LOGOUT): return initialState;
    default: return state;
  }
};

