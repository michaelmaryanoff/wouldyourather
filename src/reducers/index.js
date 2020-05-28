import { combineReducers } from 'redux';

// TODO: make a reducer for list of users

const currentUserReducer = (currentUser=null, action) => {

    // Checks to see if we are using a sign in action
    if (action.type === 'SIGN_IN') {
        // Return our user
        return action.payload
    } else if (action.type === 'SIGN_OUT') {
        return null
    }
    return currentUser;
}

// TODO: Make make a key for list of users
export default combineReducers({
    currentUser: currentUserReducer
});

