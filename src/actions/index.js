export const signIn = (user) => {
    return {
        type: 'SIGN_IN',
        payload: user
    };
};

export const signOUT = () => {
    return {
        type: 'SIGN_OUT'
    };
};

