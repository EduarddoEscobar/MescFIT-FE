import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from '../actions/testimonialActions';

const initialState = {
  testimonials: [
    {
      testimonial_id: 0,
      first_name: '',
      last_initial: '',
      testimonial: '',
    },
    {
      testimonial_id: 0,
      first_name: '',
      last_initial: '',
      testimonial: '',
    },
  ],
  fetching: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        testimonials: action.payload,
        fetching: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
