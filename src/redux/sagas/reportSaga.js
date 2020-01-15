import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getProjectReportData(action) {
    /*
        get a single projects data from report.router.js and send to report reducer
    */
    try {
        const project = yield axios.get(`/report/project/${action.payload.id}`);
        yield put({ type: 'SET_REPORT', payload: { id: action.payload.id, ...project.data } });
    } catch (error) {
        console.log('error in getProject for projectSaga', error);
    }
}

function* getProjectEducators(action) {
    /*
        gets specific educators with matching specialties to bias from report.router.js

        and sends that array or educators to reducer
    */
    try {
        const educators = yield axios.get(`/report/educators/${action.payload.id}`);
        yield put({ type: 'SET_PROJECT_EDUCATORS', payload: educators.data });
    } catch (error) {
        console.log('error in getProjectEducators in reportSaga', error);
    }
}

function* ReportSaga() {
    yield takeEvery('GET_SPECIFIC_PROJECT', getProjectReportData);
    yield takeEvery('GET_PROJECT_EDUCATORS', getProjectEducators);
}

export default ReportSaga;