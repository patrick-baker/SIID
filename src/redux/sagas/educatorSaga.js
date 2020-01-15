import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addEducator(action) {

    /*
        sends single educator data to educator.router.js and then 
        calls get Saga to get the new educator back in the reducer

    */
    try {
        yield axios.post('/educator', action.payload);
        yield put({ type: "GET_EDUCATORS" });
    } catch (error) {
        console.log(error);
    }
}

function* getEducators() {
    /*
        Gathers the list of educators and their data into array 
        from educator.router.js and stores in reducer to map through in component

    */
    try {
        let educators = yield axios.get('/educator');
        yield put({ type: "SET_EDUCATORS", payload: educators.data });
    } catch (error) {
        console.log(error);
    }
}

function* deleteEducator(action) {

    /*
       deletes single educator using id in educator.router.js and calls
       GET_EDUCATORS to get updated information

    */
    try {
        yield axios.delete(`/educator/${action.payload.id}`);
        yield put({ type: "EDUCATOR_DEL_SUCCESS" })
        yield put({ type: "GET_EDUCATORS" });
    } catch (error) {
        yield put({ type: "EDUCATOR_DEL_FAILURE" })
        console.log('Error deleting educator was', error);
    }
}

function* updateEducator(action) {
    /*
       updates single educator using educator.id in the payload
       in educatorRouter.js and call GET_EDCUATORS to get updated info
    */
    try {
        yield axios.put(`/educator/`, action.payload);
        yield put({ type: "GET_EDUCATORS" });
    } catch (error) {
        console.log(error);
    }
}

function* EducatorSaga() {
    yield takeLatest('ADD_EDUCATOR', addEducator);
    yield takeLatest('GET_EDUCATORS', getEducators)
    yield takeLatest('DELETE_EDUCATOR', deleteEducator)
    yield takeLatest('UPDATE_EDUCATOR', updateEducator)
}

export default EducatorSaga;