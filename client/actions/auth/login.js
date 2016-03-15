// Actions
import { getFirebaseInstance } from 'session.js';
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

export function login() {
  return (dispatch) => {
    dispatch(requestLogin());
    const firebaseRef = getFirebaseInstance();
    return firebaseRef.authWithOAuthPopup('facebook', (error, authData) => {
      if (error) {
        dispatch(failLogin(error));
        dispatch(pushMessage('Oops, something went wrong', 'error'));
      } else {
        dispatch(sucessLogin(authData));
        dispatch(pushMessage('Login Succesful', 'success'));
        dispatch(closeModal());
      }
    });
  };
}

export function logout() {
  return dispatch => {
    browserHistory.push('/');
    getFirebaseInstance().unauth();
    dispatch(pushMessage('Logout Succesful', 'success'));
    dispatch(successLogout());
  };
}
