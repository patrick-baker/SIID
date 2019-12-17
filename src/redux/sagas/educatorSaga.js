import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* educator(action) {
  // console.log('action.payload of ForgotPasswordSaga:', action.payload);
  try {
    yield axios.post('/educator', action.payload);
  } catch (error) {
    //console.log('error in ForgotPasswordSaga', error);
    //yield put ({ type: 'EMAIL_NOT_IN_DB'});
  }
}

function* EducatorSaga() {
  yield takeLatest('ADD_EDUCATOR', educator);
}

export default EducatorSaga;