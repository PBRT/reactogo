import {
  ADD_MESSAGE,
  REMOVE_MESSAGE,
} from 'toaster.js';

const initialState = Immutable.List();

const getElementIndex = (tab, id) =>
  tab.map(item => item.id).indexOf(id);

function toasters(state = initialState, action) {
  switch(action.type) {
    case (ADD_MESSAGE): return state.push(action.message);
    case (REMOVE_MESSAGE): return state.delete(getElementIndex(state.toJS(), action.id));
    default: return state;
  }
};

export default toasters;
