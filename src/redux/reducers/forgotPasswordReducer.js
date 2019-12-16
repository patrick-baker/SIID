const forgotPassword = (state = {
    showError: false,
    messageFromServer: '',
    showNullError: false,
}, action) => {
    switch (action.type) {
        case 'NO_EMAIL_SUBMITTED':
            return {
                showError: false,
                messageFromServer: '',
                showNullError: true,
            };
        case 'RECOVERY_EMAIL_SENT':
            return {
                showError: false,
                messageFromServer: 'recovery email sent',
                showNullError: false,
            };
        case 'EMAIL_NOT_IN_DB':
            return {
                showError: true,
                messageFromServer: '',
                showNullError: false,
            }
        default:
            return state;
    }
};

// stores message information based on success on ForgotPassword.js page
export default forgotPassword;