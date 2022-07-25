import { combineReducers } from 'redux';
import testimonialReducer from './testimonialReducer';
import headerReducer from './headerReducer';

const rootReducer = combineReducers({
  testimonialReducer,
  headerReducer,
});

export default rootReducer;
