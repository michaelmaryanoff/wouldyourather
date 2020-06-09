import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';

const currentUserReducer = (state = {}, action) => {
  if (action.type === 'SIGN_IN') {
    return { ...state, user: action.payload };
  } else if (action.type === 'SIGN_OUT') {
    return null;
  }
  return state;
};

const fetchUsersReducer = (state = {}, action) => {
  if (action.type === 'FETCH_USERS') {
    console.log('fetch users state', state);

    return { ...state, ..._.mapKeys(action.payload, 'id') };
  }
  return state;
};

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
  currentUser: currentUserReducer,
  users: fetchUsersReducer,
  questions: fetchQuestionsReducer,
  form: formReducer,
  addQuestion: addQuestionReducer,
  selectedQuestion: getselectedQuestionReducer,
  submittedQuestion: submitQuestionResponseReducer
});
