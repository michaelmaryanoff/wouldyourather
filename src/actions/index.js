import { _getUsers } from '../api/_DATA';

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

export const fetchUsers = () => async dispatch => {
    const response = await _getUsers();
    console.log(response);

    dispatch({type: 'FETCH_STREAMS', payload: response})
}