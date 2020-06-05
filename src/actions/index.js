import { _getUsers, _getQuestions } from "../api/_DATA";
import { saveQuestion, saveQuestionAnswer } from "../api/utils";
import history from "../history";

//TODO: make payload an object with a key and value
export const signIn = user => {
  return {
    type: "SIGN_IN",
    payload: user
  };
};

export const signOut = user => {
  return {
    type: "SIGN_OUT"
  };
};

export const fetchQuestions = () => async dispatch => {
  const response = await _getQuestions();

  dispatch({ type: "FETCH_QUESTIONS", payload: response });
};

export const fetchUsers = () => async dispatch => {
  const response = await _getUsers();

  dispatch({ type: "FETCH_USERS", payload: response });
};

export const fetchUsersAndQuestions = () => {
  return dispatch => {
    return dispatch(fetchUsers()).then(dispatch(fetchQuestions()));
  };
};

export const getSelectedQuestion = question => {
  return {
    type: "SELECT_QUESTION",
    payload: question
  };
};

export const submitQuestionResponse = formValues => async (dispatch, getState) => {
  const { currentUser, selectedQuestion } = getState();

  const question = {
    authedUser: currentUser,
    qid: selectedQuestion.id,
    answer: formValues.selection
  };

  await saveQuestionAnswer(question).then(
    history.push(`/questions/result/${selectedQuestion.id}`)
  );

  dispatch({ type: "SUBMIT_RESPONSE", payload: question });
};

export const addQuestion = formValues => async (dispatch, getState) => {
  const { optionOne, optionTwo } = formValues;
  const { currentUser } = getState();

  const question = {
    author: currentUser,
    optionOneText: optionOne,
    optionTwoText: optionTwo
  };

  const response = await saveQuestion(question);

  dispatch({ type: "ADD_QUESTION", payload: response });
};
