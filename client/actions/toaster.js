export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

function addMessage(message, id, type) {
  return {
    type: ADD_MESSAGE,
    message: {
      text: message,
      id: id,
      type: type ? type : 'success',
    },
  };
};

export function removeMessage(id) {
  return {
    type: REMOVE_MESSAGE,
    id: id,
  };
};

export function pushMessage(message, type) {
  return dispatch => {
    const id = new Date().getTime();
    dispatch(addMessage(message, id, type));
    setTimeout(() => dispatch(removeMessage(id)), 6000);
  };
}
