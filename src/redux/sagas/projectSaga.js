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
    const newProject = action.payload;
    let project = yield axios.post(`/project`, newProject);
    // retrieves metadata for this created project, to be displayed on the report
    yield put ({type:"GET_SPECIFIC_PROJECT",payload:{id:project.data.project_id}});
    yield put({type: 'GET_PROJECT'});
    yield put({type:"ANALYZE_TEXT",payload:{text:newProject.text,project_id:project.data.project_id}});
    } catch (error) {
    console.log('error in createProject for projectSaga', error);
    }
}

// delete the project
function* deleteProject(action) {
  try {
    
    const projectId=action.payload;
    yield axios.delete(`/project/${projectId}`);
    yield put({ type: "PROJECT_DEL_SUCCESS" })
    yield put({type: 'GET_PROJECT'});
    } catch (error) {
        yield put({ type: "PROJECT_DEL_FAILURE" })
    console.log('error in deleteProject for projectSaga', error);
    }
}


function* ProjectSaga() {
  yield takeEvery('GET_PROJECT', getProject);
  yield takeEvery('CREATE_PROJECT', createProject);
  yield takeEvery('DELETE_PROJECT', deleteProject);
}

export default ProjectSaga;