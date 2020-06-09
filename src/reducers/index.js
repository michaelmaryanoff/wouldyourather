import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionReducer from './questionReducer';

export default combineReducers({
  users: userReducer,
  questions: questionReducer
});
