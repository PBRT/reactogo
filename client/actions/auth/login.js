import firebase from 'firebase';

// Actions
import { closeModal } from 'modals.js';
import { pushMessage } from 'toaster.js';
import { browserHistory } from 'react-router';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAIL_LOGIN = 'FAIL_LOGIN';
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';

function requestLogin() { return {type: REQUEST_LOGIN}; };
function sucessLogin(payload) { return {type: SUCCESS_LOGIN, payload}; };
function failLogin(error) { return {type: FAIL_LOGIN, error}; };
function successLogout() { return {type: SUCCESS_LOGOUT}; };

export const login = () => dispatch => {
  dispatch(requestLogin());

  // Firebase
  const auth = firebase.auth();
  const provider = new firebase.auth.FacebookAuthProvider();

  return auth.signInWithPopup(provider)
  .then(authData => {
    dispatch(sucessLogin(authData));
    dispatch(pushMessage('Login Succesful', 'success'));
    dispatch(closeModal());
  })
  .catch(error => {
    dispatch(failLogin(error));
    dispatch(pushMessage('Oops, something went wrong', 'error'));
  });
};

export const logout = () => dispatch => firebase.auth().signOut().then(() => {
  browserHistory.push('/');
  dispatch(pushMessage('Logout Succesful', 'success'));
  dispatch(successLogout());
});
