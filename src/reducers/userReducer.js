import { SIGN_IN, SIGN_OUT, FETCH_USERS } from '../actions/types';

const INITIAL_STATE = {
  authedUser: null,
  userList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, authedUser: action.payload };
    case SIGN_OUT:
      return null;
    case FETCH_USERS:
      return { ...state, userList: action.payload };
    default:
      return state;
  }
};
