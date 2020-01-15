import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getCategory(action) {
  try {
      /*
      Gets the list of categories from categoryRouter.js
      and sends the data to categoryReducer.js
      */
      const category=yield axios.get(`/category`);
      yield put({type: 'SET_CATEGORY', payload: category.data});
    } catch (error) {
      console.log('error in getCategory in category saga trying to get list of biases', error);  
    }
}

function* CategorySaga() {
  yield takeLatest('GET_CATEGORY', getCategory);
}

export default CategorySaga;