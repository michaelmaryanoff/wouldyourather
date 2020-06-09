import { SIGN_IN, SIGN_OUT, FETCH_USERS } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, user: action.payload };
    case SIGN_OUT:
      return null;
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};
