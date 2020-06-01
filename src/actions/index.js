import { _getUsers, _getQuestions } from '../api/_DATA';

export const signIn = (user) => {
    return {
        type: 'SIGN_IN',
        payload: user
    };
};

export const signOut = (user) => {
    return {
        type: 'SIGN_OUT'
    };
};

export const fetchQuestions = () => async dispatch => {
    const response = await _getQuestions();
    console.log('response', response);
    
    dispatch({type:'FETCH_QUESTIONS', payload: response})
}

export const fetchUsers = () => async dispatch => {
    const response = await _getUsers();

    dispatch({type: 'FETCH_USERS', payload: response})
}