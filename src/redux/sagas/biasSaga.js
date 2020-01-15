import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* GET_BIAS_DATA(action) {
    try {
        /*
        Selects all bias counts from route in BiasRouter.js and returns in object form
        {
            race:3,
            gender:1,
            lgbtq:0,
            disability:3
            religion:3,
            total:total # of sentences in text
        }

        sets the bias data in biasDataReducer.js
        */
        let biasData = yield axios.get(`/bias/${action.payload.id}`);
        yield put({type:"SET_BIAS_DATA",payload:biasData.data});
    } catch (error) {
        yield put({type:'AUTO_ML_FAILURE'})
        console.log('error in FETCH_RULES saga', error);
    }
}

function* RuleSaga() {
    yield takeEvery('GET_BIAS_DATA', GET_BIAS_DATA);
}

export default RuleSaga;