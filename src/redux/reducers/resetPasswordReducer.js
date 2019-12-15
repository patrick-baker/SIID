const resetPassword = (state = {
    username: '',
    updated: false,
    isLoading: true,
    error: false,
}, action) => {
    switch (action.type) {
        case 'TOKEN_FOUND':
            return {
                username: action.payload.username,
                update: false,
                isLoading: false,
                error: false,
            };
        case 'TOKEN_NOT_FOUND':
            return {
                username: '',
                updated: false,
                isLoading: false,
                error: true
            };
        case 'PASSWORD_UPDATED':
            return {
                updated: true,
                error: false,
            }
        case 'PASSWORD_NOT_UPDATED':
            return {
                updated: false,
                error: true,
            }
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

// loginMode will be on the redux state at:
// state.loginMode
export default resetPassword;