import { SET_VIEWPORT } from 'viewport.js';

// viewport handler
function viewport(state = {
  isMobile: false,
  isTablet: false,
  isDesktop: true}, action) {
  switch(action.type) {
    case (SET_VIEWPORT):
      return Object.assign({}, {
        isMobile: action.width < 768,
        isTablet: action.width  >= 768 && action.width < 1024,
        isDesktop: action.width >= 1024});
    default: return state;
  }
};

export default viewport;
