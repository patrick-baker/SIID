import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchLiteraryTechniques() {

  /*
    grabs list of literary techniques from DB at project.router.js
    and sends it to reducer
  */

  try {
       const literaryTechniques = yield axios.get('/project/literary-techniques');

       yield put({ type: 'SET_LITERARY_TECHNIQUES', payload: literaryTechniques.data });
    } catch (error) {
        console.log('error in FETCH_LITERARY_TECHNIQUES saga', error);
    }
}

function* LiteraryTechniquesSaga() {
  yield takeEvery('FETCH_LITERARY_TECHNIQUES', fetchLiteraryTechniques)
}

export default LiteraryTechniquesSaga;