import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postImage(action) {
    /*
        set config vars (don't change) and send data as an object to image-url.router.js
    */
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        }

        const data = {
            imageUrl: action.payload
        }

        yield axios.post('/api/image', data, config);


    } catch (error) {
        console.log('Image URL POST failed: ', error)
    }
}

function* imageInfoSaga() {
    yield takeEvery('POST_IMAGE', postImage);
}

export default imageInfoSaga;