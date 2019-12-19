import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* fetchLiteraryTechniques() {
  try {
       const literaryTechniques = yield axios.get('/project/literary-techniques');
       console.log(literaryTechniques);
       yield put({ type: 'SET_LITERARY_TECHNIQUES', payload: literaryTechniques.data });
    } catch (error) {
        console.log('error in FETCH_LITERARY_TECHNIQUES saga', error);
    }
}

function* LiteraryTechniquesSaga() {
  yield takeEvery('FETCH_LITERARY_TECHNIQUES', fetchLiteraryTechniques)
}

export default LiteraryTechniquesSaga;