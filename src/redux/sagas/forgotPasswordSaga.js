import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* ForgotPassword(action) {
    console.log('action.payload of ForgotPasswordSaga:', action.payload);
  try {
    if (action.payload === '') {
        yield put ({type: 'NO_EMAIL_SUBMITTED'});
    } else {
        const response = yield axios.post( '/api/user/forgotPassword', {email: action.payload});
        console.log('response.data in ForgotPasswordSaga:', response.data);
            if (response.data === 'recovery email sent') {
                yield put ({type: 'RECOVERY_EMAIL_SENT'})
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