export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const addMessage = (message, id, type) => ({
  type: ADD_MESSAGE,
  message: {
    text: message,
    id: id,
    type: type ? type : 'success',
  },
});

export const removeMessage = id => ({type: REMOVE_MESSAGE, id: id});

export const pushMessage = (message, type) => dispatch => {
  const id = new Date().getTime();
  dispatch(addMessage(message, id, type));
  setTimeout(() => dispatch(removeMessage(id)), 6000);
};
