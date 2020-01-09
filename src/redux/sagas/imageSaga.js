import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postImage(action) {
    console.log("HERE!")
    try {
        console.log("in postImageUrl saga");
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        }
        const data = {
            imageUrl: action.payload
        }
        console.log("posting image url");
        const response = yield axios.post('/api/image', data, config);
        console.log(response);
        // AFTER POST COMES BACK SUCCESSFUL, DO A GET

    } catch (error) {
        console.log('Image URL POST failed: ', error)
    }
}

function* imageInfoSaga() {
    yield takeEvery('POST_IMAGE', postImage);
}

export default imageInfoSaga;