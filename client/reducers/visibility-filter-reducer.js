import { SET_VISIBILITY_FILTER, VisibilityFilters } from 'todos.js';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.filter;
  } else {
    return state;
  }
}

export default visibilityFilter;
