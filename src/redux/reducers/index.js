import { combineReducers } from 'redux';
import testimonialReducer from './testimonialReducer';

const rootReducer = combineReducers({
  testimonialReducer,
});

export default rootReducer;
