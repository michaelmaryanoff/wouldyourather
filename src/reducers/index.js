import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// TODO: make a reducer for list of users

const currentUserReducer = (currentUser=null, action) => {

    // Checks to see if we are using a sign in action
    if (action.type === 'SIGN_IN') {
        return action.payload
    } else if (action.type === 'SIGN_OUT') {
        return null
    }
    return currentUser;
}

const fetchUsersReducer = (state=[], action) => {
    if (action.type === 'FETCH_USERS') {
        return action.payload
    }
    return state
}

const fetchQuestionsReducer = (state={}, action) => {
    if (action.type === 'FETCH_QUESTIONS') {
        return action.payload
    }
    return state
}

const addQuestionReducer = (state={}, action) => {
    if (action.type === 'ADD_QUESTION') {
        console.log(action)
        
        
        return action.payload
    }
    return state
}


export default combineReducers({
    currentUser: currentUserReducer,
    users: fetchUsersReducer,
    questions: fetchQuestionsReducer,
    form: formReducer,
    addQuestion: addQuestionReducer
});

