import { put, takeLatest, takeEvery, actionChannel } from 'redux-saga/effects';
import axios from 'axios';

// gets the list of the user's projects
function* getMetaData(action) {
    try {
        const projectMetaData = yield axios.get(`/report/project/${action.payload}`);
        const projectBias = yield axios.get(`report/bias/${action.payload}`);
        yield put({ type: 'SET_PROJECT_METADATA', payload:  });
    } catch (error) {
        console.log('Error in reportSaga getReport: ', error);
    }
}

function* ReportSaga() {
    yield takeEvery('GET_PROJECT_METADATA', getMetaData);
}

export default ReportSaga;