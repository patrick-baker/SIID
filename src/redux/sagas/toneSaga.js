import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchTone() {
  /*
  gets all possible tones from db and sends to reducer
  */
  try {
       const tones = yield axios.get('/project/tone')
      
       yield put({ type: "SET_TONE", payload: tones.data })
    } catch (error) {
        console.log('error in FETCH_TONE saga', error);
    }
}

function* ToneSaga() {
  yield takeEvery('FETCH_TONE', fetchTone)
}

export default ToneSaga;