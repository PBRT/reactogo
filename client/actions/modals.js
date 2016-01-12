export const OPEN_MODAL_LOGIN = 'OPEN_MODAL_LOGIN';
export const CLOSE_MODAL_LOGIN = 'CLOSE_MODAL_LOGIN';

export function openModal() {
  return {
    type: OPEN_MODAL_LOGIN,
  };
};

export function closeModal() {
  return {
    type: CLOSE_MODAL_LOGIN,
  };
};
