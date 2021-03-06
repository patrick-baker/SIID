import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* ANALYZE_TEXT(action) {
  try {

  /*
    sends body of text to rule.router.js which checks for all flags in the text and stores them in DB

    the text is then sent to autoML.router.js and get bias data (this post route is what takes alot of time)

    bias data is then set in the reducer and we gather the new specific project data and educators
  */

    // posts rules-based results
    yield axios.post('/rule',{text:action.payload.text,project_id:action.payload.project_id})
    yield put({type:"GET_FLAGS",payload:{id:action.payload.project_id}});
    // posts results for ML 
    const bias = yield axios.post('/automl',{text:action.payload.text, project_id: action.payload.project_id});
    yield put({type:'SET_BIAS_DATA',payload:bias.data})
    yield put ({type:"GET_SPECIFIC_PROJECT",payload:{id:action.payload.project_id}});

    yield put({type: "GET_PROJECT_EDUCATORS", payload: {id: action.payload.project_id}});
 } catch (error) {
     console.log('error in ANALYZE TEXT saga', error);
 }
}

function* getFlagsSaga(action) {
  /*
    grabs all flags from db with specific ID at flag.router.js
    and sends it to flag reducer
  */
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