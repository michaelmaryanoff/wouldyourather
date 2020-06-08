import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { act } from "react-dom/test-utils";

const currentUserReducer = (state = {}, action) => {
  if (action.type === "SIGN_IN") {
    return { ...state, user: action.payload };
  } else if (action.type === "SIGN_OUT") {
    return null;
  }
  return state;
};

const fetchUsersReducer = (state = {}, action) => {
  if (action.type === "FETCH_USERS") {
    return { ...state, ...action.payload };
  }
  return state;
};

const fetchQuestionsReducer = (state = {}, action) => {
  if (action.type === "FETCH_QUESTIONS") {
    return { ...state, ...action.payload };
  }
  return state;
};

const addQuestionReducer = (state = {}, action) => {
  if (action.type === "ADD_QUESTION") {
    return { ...state, ...action.payload };
  }
  return state;
};

const getselectedQuestionReducer = (state = {}, action) => {
  if (action.type === "SELECT_QUESTION") {
    return { ...state, ...action.payload };
  }
  return state;
};

const submitQuestionResponseReducer = (state = {}, action) => {
  if (action.type === "SUBMIT_RESPONSE") {
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
