import {
  FETCH_QUESTIONS,
  ADD_QUESTION,
  SELECT_QUESTION,
  SUBMIT_RESPONSE
} from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
  questionList: {},
  selectedQuestion: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questionList: _.mapKeys(action.payload, 'id') };
    case ADD_QUESTION:
      return { ...state, [action.payload.id]: action.payload };
    case SELECT_QUESTION:
      return { ...state, selectedQuestion: action.payload };
    case SUBMIT_RESPONSE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
