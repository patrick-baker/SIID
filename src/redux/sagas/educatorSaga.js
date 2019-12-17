import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* educator(action) {
  // console.log('action.payload of ForgotPasswordSaga:', action.payload);
  try {
    yield axios.post('/educator', action.payload);
    yield put({type:"GET_EDUCATORS"});
  } catch (error) {
    console.log(error);
  }
}

function* getEducators() {
  try { 
    let educators = yield axios.get('/educator');
    yield put({type:"SET_EDUCATORS",payload:educators.data});
  } catch(error) {
    console.log(error);
  }
}

function* EducatorSaga() {
  yield takeLatest('ADD_EDUCATOR', educator);
  yield takeLatest('GET_EDUCATORS',getEducators)
}

export default EducatorSaga;