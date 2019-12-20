import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import forgotPassword from './forgotPasswordReducer';
import resetPassword from './resetPasswordReducer';
import project from './projectReducer';
import rule from './ruleReducer';
import flag from './flagReducer';
import educator from './educatorReducer';
import category from './categroyReducer';
import step from './stepReducer';
import tone from './toneReducer';
import literaryTechnique from './literaryTechniqueReducer';
import form from './formReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  forgotPassword, // will contain message to the user contingent on forgotPassword submission
  resetPassword, 
  project,
  rule,
  flag,
  educator,
  category,
  step,
  tone,
  literaryTechnique,
  form
});

export default rootReducer;
