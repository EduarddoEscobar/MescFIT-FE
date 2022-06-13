import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getTestimonials = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get(`${process.env.BACKEND_URL}/api/testimonials`)
      .then(resp => {
        dispatch(fetchSuccess(resp.data));
      })
      .catch(error => dispatch(fetchFail(error)));
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = testimonials => {
  return { type: FETCH_SUCCESS, payload: testimonials };
};

export const fetchFail = error => {
  return { type: FETCH_FAIL, payload: error };
};
