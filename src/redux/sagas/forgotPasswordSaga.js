import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* ForgotPassword(action) {
    // console.log('action.payload of ForgotPasswordSaga:', action.payload);
  try {
    if (action.payload === '') {
        yield put ({type: 'NO_EMAIL_SUBMITTED'});
    } else {
        // runs the server function to send email
        const response = yield axios.post( '/api/user/forgotPassword', {email: action.payload});
        console.log('response.data in ForgotPasswordSaga:', response.data);
            // if email exists in DB
            if (response.data === 'recovery email sent') {
                yield put ({type: 'RECOVERY_EMAIL_SENT'})
            // if email does not exist in DB
            } else if (response.data === 'email not in db') {
                yield put ({ type: 'EMAIL_NOT_IN_DB'});
            }
        }
    } catch (error) {
        console.log('error in ForgotPasswordSaga', error);
        yield put ({ type: 'EMAIL_NOT_IN_DB'});
    }
}

function* ForgotPasswordSaga() {
  yield takeLatest('FORGOT_PASSWORD', ForgotPassword);
}

export default ForgotPasswordSaga;