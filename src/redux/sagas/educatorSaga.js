import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* addEducator(action) {
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

function* deleteEducator(action) {
    try {
      yield axios.delete(`/educator/${action.payload.id}`);
      yield put({type:"GET_EDUCATORS"});
    }catch(error) {
      console.log(error);
    }
}

function* updateEducator(action) {
    try {
      yield axios.put(`/educator`,action.payload);
      yield put({type:"GET_EDUCATORS"});
    }catch(error) {
      console.log(error);
    }
}

function* EducatorSaga() {
  yield takeLatest('ADD_EDUCATOR', addEducator);
  yield takeLatest('GET_EDUCATORS',getEducators)
  yield takeLatest('DELETE_EDUCATOR',deleteEducator)
  yield takeLatest('UPDATE_EDUCATOR',updateEducator)
}

export default EducatorSaga;