import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todos.js';
const { SHOW_ALL } = VisibilityFilters;

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

function visibilityFilter(state = SHOW_ALL, action) {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.filter;
  } else {
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter: visibilityFilter,
  todos: todos,
});

export default todoApp;
