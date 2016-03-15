import { SUCCESS_LOGIN, FAIL_LOGIN } from 'login.js';

const intialState = Immutable.Map({
  token: null,
  uid: null,
  provider: null,
  user: {},
  isLoggedIn: false,
});

function login(state = intialState, action) {
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
    case (FAIL_LOGIN): return intialState;
    default: return state;
  }
};

export default login;
