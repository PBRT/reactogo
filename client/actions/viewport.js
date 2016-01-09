export const SET_VIEWPORT = 'SET_VIEWPORT';

export function setViewport(width) {
  return {
    type: SET_VIEWPORT,
    width
  };
};
