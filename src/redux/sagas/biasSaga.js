import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user

function* GET_BIAS_DATA(action) {
    try {
        let biasData = yield axios.get(`/bias/${action.payload.id}`);
        yield put({type:"SET_BIAS_DATA",payload:biasData.data});
    } catch (error) {
        console.log('error in FETCH_RULES saga', error);
    }
}

function* RuleSaga() {
    yield takeEvery('GET_BIAS_DATA', GET_BIAS_DATA);
}

export default RuleSaga;