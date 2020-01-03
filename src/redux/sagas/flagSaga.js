import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to post results from text analysis, both for rules flags and ML findings
function* ANALYZE_TEXT(action) {
  try {
    // posts rules-based results
    const flags = yield axios.post('/rule',{text:action.payload.text,project_id:action.payload.project_id})
    yield put({type:"SET_FLAGS",payload:flags.data});
    // posts results for ML 
    const bias = yield axios.post('/automl',{text:action.payload.text, project_id: action.payload.project_id});
    yield put({type:'SET_BIAS_DATA',payload:bias.data})
 } catch (error) {
     console.log('error in ANALYZE TEXT saga', error);
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