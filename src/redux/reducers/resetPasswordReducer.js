// stores username and status information for resetPassword component
const resetPassword = (state = {
    username: '',
    updated: false,
    isLoading: true,
    error: false,
}, action) => {
    switch (action.type) {
        // if token is found, page is rendered successfully for user
        case 'TOKEN_FOUND':
            return {
                username: action.payload.username,
                update: false,
                isLoading: false,
                error: false,
            };
        // if token is not found, the error message is displayed
        case 'TOKEN_NOT_FOUND':
            return {
                username: '',
                updated: false,
                isLoading: false,
                error: true
            };
        // when password is updated, a success message is displayed
        case 'PASSWORD_UPDATED':
            return {
                updated: true,
                error: false,
            }
        // failure message is displayed when password fails to update
        case 'PASSWORD_NOT_UPDATED':
            return {
                updated: false,
                error: true,
            }
        // reset password reducer is cleared on component unmounting
        case 'CLEAR_RESET_REDUCER':
            return {
                username: '',
                updated: false,
                isLoading: true,
                error: false,
            } 
        default:
            return state;
    }
};

// holds state for resetPassword.js, messages and update/error messages
export default resetPassword;