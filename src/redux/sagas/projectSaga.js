import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// gets the list of the user's projects
function* getProject() {
  try {
    const project=yield axios.get(`/project`);
    yield put({type: 'SET_PROJECT', payload: project.data});
    } catch (error) {
    console.log('error in getProject for projectSaga', error);
    }
}

// insert the project
function* createProject(action) {
  try {
    const newProject=action.payload
    yield axios.post(`/project`, newProject);
    yield put({type: 'GET_PROJECT'});
    } catch (error) {
    console.log('error in createProject for projectSaga', error);
    }
}

// remove the project
function* removeProject(action) {
  try {
    const projectId=action.payload.id
    yield axios.delete(`/project/$projectId`);
    yield put({type: 'GET_PROJECT'});
    } catch (error) {
    console.log('error in removeProject for projectSaga', error);
    }
}

function* ProjectSaga() {
  yield takeEvery('GET_PROJECT', getProject);
  yield takeEvery('CREATE_PROJECT', createProject);
  yield takeEvery('REMOVE_PROJECT', removeProject); 
}

export default ProjectSaga;