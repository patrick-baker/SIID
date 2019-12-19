import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* FETCH_RULES() {
    // console.log('action.payload of ForgotPasswordSaga:', action.payload);
  try {
       const rules = yield axios.get('/rule')
       console.log(rules)
       yield put({ type: "SET_RULES", payload: rules.data })
    } catch (error) {
        console.log('error in FETCH_RULES saga', error);
    }
}

function* ADD_RULE() {

  try {
       yield axios.post('/rule/add', )
    //    console.log(rules)
       yield put({ type: "FETCH_RULES" })
    } catch (error) {
        console.log('error in FETCH_RULES saga', error);
    }
}

function* RuleSaga() {
  yield takeEvery('FETCH_RULES', FETCH_RULES)
  yield takeLatest('ADD_RULE', ADD_RULE)
}

export default RuleSaga;