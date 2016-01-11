import { OPEN_MODAL_LOGIN, CLOSE_MODAL_LOGIN } from 'modals.js';

function modal(state = false, action) {
  switch(action.type) {
    case (OPEN_MODAL_LOGIN): return true;
    case (CLOSE_MODAL_LOGIN): return false;
    default: return state;
  }
};

function modals(state = {isLoginModalOpen: false}, action) {
  switch(action.type) {
    case (OPEN_MODAL_LOGIN):
      return Object.assign({}, state, { isLoginModalOpen: modal(state.isLoginModalOpen, action)});
    case (CLOSE_MODAL_LOGIN):
      return Object.assign({}, state, { isLoginModalOpen: modal(state.isLoginModalOpen, action)});
    default: return state;
  }
};

export default modals;
