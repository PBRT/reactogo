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
      uid: action.payload.uid,
      token: action.payload.token,
      provider: action.payload.provider,
      user: Object.assign({}, state.user, {
        displayName: action.payload.facebook.displayName,
        email: action.payload.facebook.email,
        id: action.payload.facebook.id,
        profileImageURL: action.payload.facebook.profileImageURL,
      }),
    });
    case (FAIL_LOGIN): return initialState;
    case (SUCCESS_LOGOUT): return initialState;
    default: return state;
  }
};

