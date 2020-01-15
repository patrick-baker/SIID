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



function* ADD_RULE(action) {

  /*
    JSON object is created in the AddRule.js and sent as payload
    adds rule to db in rule.router.js
    calls fetch rules now that a new one is added
  */
  try {
       yield axios.post('/rule/add', action.payload)
       yield put({ type: "FETCH_RULES"})
    } catch (error) {
        console.log('error in ADD_RULE saga', error);
    }
}

function* DELETE_RULE(action) {

  /*
    Pass ID as action.payload to delete, then fetch new set of rules.
  */
    try {
        console.log("in delete rule saga with", action.payload)
         yield axios.delete(`/rule/${action.payload}`)
         yield put({type:"RULE_DEL_SUCCESS"})
         yield put({ type: "FETCH_RULES"})
      } catch (error) {
        yield put({type:"RULE_DEL_FAILURE"})
        yield put({ type: "FETCH_RULES"})
        console.log('error in DELETE_RULE saga', error);
      }
  }

function* RuleSaga() {
  yield takeEvery('FETCH_RULES', FETCH_RULES)
  yield takeLatest('ADD_RULE', ADD_RULE)
  yield takeLatest('DELETE_RULE', DELETE_RULE)
}

export default RuleSaga;