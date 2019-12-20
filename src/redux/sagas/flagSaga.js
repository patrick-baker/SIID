import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user

function* ANALYZE_TEXT(action) {
  try {
    const rules = yield axios.post('/rule',{text:action.payload})
    const bias = yield axios.post('/automl',{text:action.payload});
    
    yield put ({type:"SET_FLAGS",payload:rules.data})
    yield put({type:"SET_BIAS_DATA",payload:bias.data});
 } catch (error) {
     console.log('error in FETCH_RULES saga', error);
 }
}

function* getFlagsSaga(action) {
  try {
    let flags = yield axios.get(`/flag/${action.payload.id}`);
    yield put({type:"SET_FLAGS",payload:flags.data})
  } catch(error) {
    console.log(error);
  }
}

function* RuleSaga() {
  yield takeEvery('ANALYZE_TEXT',ANALYZE_TEXT);
  yield takeEvery('GET_FLAGS',getFlagsSaga);

}

export default RuleSaga;