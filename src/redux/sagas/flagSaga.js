import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to post results from text analysis, both for rules flags and ML findings
function* ANALYZE_TEXT(action) {
  try {
    console.log('In analyzeText in flagSaga',action.payload)
    // posts rules-based results
    const flags = yield axios.post('/rule',{text:action.payload.text,project_id:action.payload.project_id})
    yield put({type:"GET_FLAGS",payload:{id:action.payload.project_id}});
    // posts results for ML 
    const bias = yield axios.post('/automl',{text:action.payload.text, project_id: action.payload.project_id});
    yield put({type:'SET_BIAS_DATA',payload:bias.data})
    yield put ({type:"GET_SPECIFIC_PROJECT",payload:{id:action.payload.project_id}});
    // dispatches to getProjectEducators in reportSaga, to retrieve educators for this project
    // console.log("second time not first") // Dave just added this 
    yield put({type: "GET_PROJECT_EDUCATORS", payload: {id: action.payload.project_id}});
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