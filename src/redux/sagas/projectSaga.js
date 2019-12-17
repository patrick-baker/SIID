import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* project(action) {
    // console.log('action.payload of ForgotPasswordSaga:', action.payload);
  try {
    if (action.payload === '') {
        //yield put ({type: 'NO_EMAIL_SUBMITTED'});
    } else {
        // runs the server function to send email
    
        }
    } catch (error) {
        //console.log('error in ForgotPasswordSaga', error);
        //yield put ({ type: 'EMAIL_NOT_IN_DB'});
    }
}

function* ProjectSaga() {
  //yield takeLatest('FORGOT_PASSWORD', project);
}

export default ProjectSaga;