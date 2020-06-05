import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const currentUserReducer = (currentUser = null, action) => {
  // Checks to see if we are using a sign in action
  if (action.type === "SIGN_IN") {
    console.log("currentUserReducer -> action.payload", action.payload);
    return action.payload;
  } else if (action.type === "SIGN_OUT") {
    return null;
  }
  return currentUser;
};

const fetchUsersReducer = (state = [], action) => {
  if (action.type === "FETCH_USERS") {
    return action.payload;
  }
  return state;
};

const fetchQuestionsReducer = (state = {}, action) => {
  if (action.type === "FETCH_QUESTIONS") {
    return action.payload;
  }
  return state;
};

const addQuestionReducer = (state = {}, action) => {
  if (action.type === "ADD_QUESTION") {
    return action.payload;
  }
  return state;
};

const getselectedQuestionReducer = (state = {}, action) => {
  if (action.type === "SELECT_QUESTION") {
    return action.payload;
  }
  return state;
};

const submitQuestionResponseReducer = (state = {}, action) => {
  if (action.type === "SUBMIT_RESPONSE") {
    return action.payload;
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
