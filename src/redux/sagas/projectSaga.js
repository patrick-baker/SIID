import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getProject() {

  /*
    get array of projects from project.router.js and send array to reducer
  */
  try {
    const project=yield axios.get(`/project`);
    yield put({type: 'SET_PROJECT', payload: project.data});
    } catch (error) {
    console.log('error in getProject for projectSaga', error);
    }
}

  /*
    1. Post a project to db in project.router.js 
    2. call the specific project saga to get that single project back from db
    3. get all projects back from db now that a new one is added
    4. send the text from the project to the analyze text
  */
function* createProject(action) {
  try {
    const newProject = action.payload;
    let project = yield axios.post(`/project`, newProject);
    // retrieves metadata for this created project, to be displayed on the report
    yield put ({type:"GET_SPECIFIC_PROJECT",payload:{id:project.data.project_id}});
    yield put({type: 'GET_PROJECT'});
    yield put({type:"ANALYZE_TEXT",payload:{text:newProject.text, project_id:project.data.project_id}});
    } catch (error) {
    console.log('error in createProject for projectSaga', error);
    }
}

// delete the project
function* deleteProject(action) {
  try {

    /*
      delete specific project based on id and 
      call get projects saga to get updated projects list
    */
    
    const projectId=action.payload;
    yield axios.delete(`/project/${projectId}`);
    yield put({ type: "PROJECT_DEL_SUCCESS" })
    yield put({type: 'GET_PROJECT'});
    } catch (error) {
        yield put({ type: "PROJECT_DEL_FAILURE" })
    console.log('error in deleteProject for projectSaga', error);
    }
}

function* updateProject(action) {
  try {

    /*
      uses id to identify which project to update in project.router.js
      the new updated project is set as the new specific project
      get all projects again now that one has been updated
      analyze potentially new body of text
    */
    
    const projectId=action.payload.id;
    yield axios.put(`/project/${projectId}`,action.payload);
    yield put({type:"GET_SPECIFIC_PROJECT",payload:{id:projectId}});
    yield put({type:'GET_PROJECT'});
    yield put({type:"ANALYZE_TEXT",payload:{text:action.payload.text,project_id:projectId}});
    } catch (error) {
        yield put({ type: "PROJECT_DEL_FAILURE" })
    console.log('error in deleteProject for projectSaga', error);
    }
}


function* ProjectSaga() {
  yield takeEvery('GET_PROJECT', getProject);
  yield takeEvery('CREATE_PROJECT', createProject);
  yield takeEvery('DELETE_PROJECT', deleteProject);
  yield takeEvery('UPDATE_PROJECT',updateProject)
}

export default ProjectSaga;