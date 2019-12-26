import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* FETCH_RULES() {
  try {
       const rules = yield axios.get('/rule')
       console.log(rules)
       yield put({ type: "SET_RULES", payload: rules.data })
    } catch (error) {
        console.log('error in FETCH_RULES saga', error);
    }
}


function* ANALYZE_TEXT(action) {
  try {
    const flags = yield axios.post('/rule',{text:action.payload})
    yield put({type:"SET_RULES",payload:flags.data});

    const bias = yield axios.post('/automl',{text:action.payload});
    yield put({type:'SET_BIAS_DATA',payload:bias.data})
 } catch (error) {
     console.log('error in FETCH_RULES saga', error);
 }
}

// JSON object is created in the AddRule.js and sent as payload
function* ADD_RULE(action) {
  try {
       yield axios.post('/rule/add', action.payload)
       yield put({ type: "FETCH_RULES"})
    } catch (error) {
        console.log('error in ADD_RULES saga', error);
    }
}

function* RuleSaga() {
  yield takeEvery('FETCH_RULES', FETCH_RULES)
  yield takeLatest('ADD_RULE', ADD_RULE)
  yield takeLatest('ANALYZE_TEXT', ANALYZE_TEXT)
}

export default RuleSaga;