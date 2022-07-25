export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SET_FOCUS = 'SET_FOCUS';

export const toggleMenu = () => {
  return { type: TOGGLE_MENU };
};

export const setFocus = focus => {
  return { type: SET_FOCUS, payload: focus };
};
