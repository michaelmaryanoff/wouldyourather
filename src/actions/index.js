import { _getUsers, _getQuestions } from '../api/_DATA';
import { saveQuestion } from '../api/utils'

//TODO: make payload an object with a key and value
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
    
    dispatch({type:'FETCH_QUESTIONS', payload: response})
}

export const fetchUsers = () => async dispatch => {
    const response = await _getUsers();

    dispatch({type: 'FETCH_USERS', payload: response})
}

export const fetchUsersAndQuestions = () => {
    return dispatch => {
        return dispatch(fetchUsers())
        .then(dispatch(fetchQuestions()))
    }
}

export const addQuestion = formValues => async (dispatch, getState) => {
    const { optionOne, optionTwo } = formValues
    const { currentUser } = getState();

    const question = {
        author: currentUser,
        optionOneText: optionOne,
        optionTwoText: optionTwo
    }
    
    const response = await saveQuestion(question)
    
    dispatch({type: 'ADD_QUESTION', payload: response})
}