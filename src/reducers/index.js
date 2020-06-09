import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import userReducer from './userReducer';

const fetchQuestionsReducer = (state = {}, action) => {
  if (action.type === 'FETCH_QUESTIONS') {
    return { ...state, ..._.mapKeys(action.payload, 'id') };
  }
  return state;
};

const addQuestionReducer = (state = {}, action) => {
  if (action.type === 'ADD_QUESTION') {
    console.log('add question state2', state);

    return { ...state, [action.payload.id]: action.payload };
  }
  return state;
};

const getselectedQuestionReducer = (state = {}, action) => {
  if (action.type === 'SELECT_QUESTION') {
    console.log('question state', state);

    return { ...state, ...action.payload };
  }
  return state;
};

const submitQuestionResponseReducer = (state = {}, action) => {
  if (action.type === 'SUBMIT_RESPONSE') {
    return { ...state, ...action.payload };
  }
  return state;
};

export default combineReducers({
  users: userReducer,
  questions: fetchQuestionsReducer,
  form: formReducer,
  addQuestion: addQuestionReducer,
  selectedQuestion: getselectedQuestionReducer,
  submittedQuestion: submitQuestionResponseReducer
});
