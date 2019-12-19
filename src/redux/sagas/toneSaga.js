import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// sends axios request to server to send update password email to user
function* fetchTone() {
    // console.log('action.payload of ForgotPasswordSaga:', action.payload);
  try {
       const tones = yield axios.get('/project/tone')
       console.log(tones)
       yield put({ type: "SET_TONE", payload: tones.data })
    } catch (error) {
        console.log('error in FETCH_TONE saga', error);
    }
}

function* ToneSaga() {
  yield takeEvery('FETCH_TONE', fetchTone)
}

export default ToneSaga;