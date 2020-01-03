import { put, takeLatest, takeEvery, actionChannel } from 'redux-saga/effects';
import axios from 'axios';

// gets the list of the user's projects
function* getMetaData(action) {
    // try {
    //     const projectMetaData = yield axios.get(`/report/project/${action.payload}`);
    //     const projectBias = yield axios.get(`report/bias/${action.payload}`);
    //     yield put({ type: 'SET_PROJECT_METADATA', payload:  });
    // } catch (error) {
    //     console.log('Error in reportSaga getReport: ', error);
    // }
}

function* getProjectReportData(action) {
    try {
      const project=yield axios.get(`/report/project/${action.payload.id}`);
      yield put({type: 'SET_REPORT', payload: {id:action.payload.id, ...project.data}});
      } catch (error) {
      console.log('error in getProject for projectSaga', error);
      }
  }

function* ReportSaga() {
    yield takeEvery('GET_PROJECT_METADATA', getMetaData);
    yield takeEvery('GET_SPECIFIC_PROJECT',getProjectReportData);
}

export default ReportSaga;