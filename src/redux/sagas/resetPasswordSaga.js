import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// a get request which returns username to resetPasswordReducer if the token matches that in the DB
function* resetPassword(action) {
    console.log('action.payload of resetPasswordSaga:', action.payload);
    try {
        // checks if the token from the link matches that in the DB
        const response = yield axios.get(`/api/user/reset/${action.payload.token}`, {
        });
        if (response.data.message === 'password reset link a-ok') {
            // if it does, sends the username information to resetPasswordReducer
            yield put ({type: 'TOKEN_FOUND', payload: {username: response.data.username}})
          }
    } catch (error) {
        console.log(error.response.data);
        // sets resetPasswordReducer error property to true
        yield put ({type:'TOKEN_NOT_FOUND'})
      }
}

// attempts to update the user's password in the DB 
function* updatePassword(action) {
    // console.log('action.payload of updatePasswordSaga:', action.payload);
    try {
        // runs put route to update password in database
        const response = yield axios.put('/api/user/updatePasswordViaEmail', action.payload);
        console.log('response.data in UpdatePasswordSaga:', response);
        if (response.data.message === 'password updated') {
            // changes message for successful update
            yield put ({type: 'PASSWORD_UPDATED'});
        } else {
            // changes message for failed update
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