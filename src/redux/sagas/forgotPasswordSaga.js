import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
let verbose = false; // shows below console.logs if true

// sends axios request to server to send update password email to user
function* ForgotPassword(action) {
    // console.log('action.payload of ForgotPasswordSaga:', action.payload);
  try {
    if (action.payload === '') {
        yield put ({type: 'NO_EMAIL_SUBMITTED'});
    } else {
        // runs the server function to send email
        const response = yield axios.post( '/api/user/forgotPassword', {email: action.payload});
        if (verbose) console.log('response.data in ForgotPasswordSaga:', response.data);
            // if email exists in DB
            if (response.data === 'recovery email sent') {
                yield put ({type: 'RECOVERY_EMAIL_SENT'})
            // if email does not exist in DB
            } else if (response.data === 'email not in db') {
                yield put ({ type: 'EMAIL_NOT_IN_DB'});
            }
        }
    } catch (error) {
        if (verbose) console.log('error in ForgotPasswordSaga', error);
        // if there is an error on the server side
        yield put ({ type: 'EMAIL_NOT_IN_DB'});
    }
}

function* ForgotPasswordSaga() {
  yield takeLatest('FORGOT_PASSWORD', ForgotPassword);
}

export default ForgotPasswordSaga;