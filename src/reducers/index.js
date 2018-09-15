import { combineReducers } from 'redux';
import hackerNews from './hackerNews';
import errors from './errors';

const rootReducer = combineReducers({
  hackerNews,
  errors,
});

export default rootReducer;
