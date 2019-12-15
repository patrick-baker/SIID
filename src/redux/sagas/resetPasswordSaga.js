import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* resetPassword(action) {
    console.log('action.payload of resetPasswordSaga:', action.payload);
    try {
        const response = yield axios.get(`/api/user/reset/${action.payload.token}`, {
        });
        console.log('response of reset get request:', response);
        if (response.data.message === 'password reset link a-ok') {
            yield put ({type: 'TOKEN_FOUND', payload: {username: response.data.username}})
          }
    } catch (error) {
        console.log(error.response.data);
        yield put ({type:'TOKEN_NOT_FOUND'})
      }
}

function* updatePassword(action) {
    console.log('action.payload of updatePasswordSaga:', action.payload);
    try {
        const response = yield axios.put('/api/user/updatePasswordViaEmail', action.payload);
        console.log('response.data in UpdatePasswordSaga:', response);
        if (response.data.message === 'password updated') {
            yield put ({type: 'PASSWORD_UPDATED'});
        } else {
            yield put ({type: 'PASSWORD_NOT_UPDATED'});
        }
      } catch (error) {
        console.log(error.response.data);
        yield put ({type: 'PASSWORD_NOT_UPDATED'});
      }
}

function* resetPasswordSaga() {
  yield takeLatest('RESET_PASSWORD', resetPassword);
  yield takeLatest('UPDATE_PASSWORD', updatePassword);
}

export default resetPasswordSaga;