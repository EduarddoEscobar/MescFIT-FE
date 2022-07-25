import { SET_FOCUS, TOGGLE_MENU } from '../actions/headerActions';

const initialState = {
  focus: '',
  menuOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOCUS:
      return {
        ...state,
        focus: action.payload,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return state;
  }
};

export default reducer;
