import { ADD_TODO, COMPLETE_TODO } from 'todos.js';

function todos(state = [], action) {
  if (action.type === ADD_TODO) {
    return action.text === '' ? state :
      [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ];
  } else if (action.type === COMPLETE_TODO) {
    let newState = _.clone(state);
    newState[action.index].completed = true;
    return newState;
  } else {
    return state;
  }
}


export default todos;
