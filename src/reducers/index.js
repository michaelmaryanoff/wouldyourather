import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import questionReducer from './questionReducer';

export default combineReducers({
  users: userReducer,
  questions: questionReducer,
  form: formReducer
});
