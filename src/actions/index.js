import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_QUESTIONS,
  FETCH_USERS,
  SELECT_QUESTION,
  SUBMIT_RESPONSE,
  ADD_QUESTION
} from './types';

import { _getUsers, _getQuestions } from '../api/_DATA';
import { saveQuestion, saveQuestionAnswer } from '../api/utils';
import history from '../history';

export const signIn = user => {
  return {
    type: SIGN_IN,
    payload: user
  };
};

export const signOut = user => {
  return {
    type: SIGN_OUT
  };
};

export const fetchQuestions = () => async dispatch => {
  const response = await _getQuestions();

  dispatch({ type: FETCH_QUESTIONS, payload: response });
};

export const fetchUsers = () => async dispatch => {
  const response = await _getUsers();

  dispatch({ type: FETCH_USERS, payload: response });
};

export const fetchUsersAndQuestions = () => {
  return dispatch => {
    return dispatch(fetchUsers()).then(dispatch(fetchQuestions()));
  };
};

export const getSelectedQuestion = question => {
  return {
    type: SELECT_QUESTION,
    payload: question
  };
};

export const submitQuestionResponse = formValues => async (dispatch, getState) => {
  const { users, questions } = getState();

  const question = {
    authedUser: users.authedUser,
    qid: questions.selectedQuestion.id,
    answer: formValues.selection
  };

  await saveQuestionAnswer(question);

  history.push(`/questions/result/${questions.selectedQuestion.id}`);

  dispatch({ type: SUBMIT_RESPONSE, payload: question });
};

export const addQuestion = formValues => async (dispatch, getState) => {
  const { optionOne, optionTwo } = formValues;
  const { users } = getState();

  const question = {
    author: users.authedUser,
    optionOneText: optionOne,
    optionTwoText: optionTwo
  };

  const response = await saveQuestion(question);

  history.push('/home');

  dispatch({ type: ADD_QUESTION, payload: response });
};
