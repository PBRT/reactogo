import { ADD_MESSAGE, REMOVE_MESSAGE} from 'toaster.js';

export const initialState = Immutable.List();

const getElementIndex = (tab, id) =>
  tab.map(item => item.id).indexOf(id);

export const toastersReducer = (state = initialState, action) => {
  switch(action.type) {
    case (ADD_MESSAGE): return state.push(action.message);
    case (REMOVE_MESSAGE): return state.delete(getElementIndex(state.toJS(), action.id));
    default: return state;
  }
};

