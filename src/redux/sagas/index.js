import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import forgotPasswordSaga from './forgotPasswordSaga';
import resetPasswordSaga from './resetPasswordSaga';
import projectSaga from './projectSaga';
import ruleSaga from './ruleSaga';
import flagSaga from './flagSaga';
import educatorSaga from './educatorSaga';
import categorySaga from './categorySaga';
import toneSaga from './toneSaga';
import literaryTechniques from './literaryTechniquesSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    forgotPasswordSaga(),
    resetPasswordSaga(),
    projectSaga(),
    ruleSaga(),
    flagSaga(),
    educatorSaga(),
    categorySaga(),
    toneSaga(),
    literaryTechniques(),
  ]);
}
