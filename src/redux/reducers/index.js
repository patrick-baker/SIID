import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import forgotPassword from './forgotPasswordReducer';
import resetPassword from './resetPasswordReducer';
import project from './projectReducer';
import rule from './ruleReducer';
import flagReducer from './flagReducer';
import educator from './educatorReducer';
import biasDataReducer from './biasDataReducer';
import step from './stepReducer';
import tone from './toneReducer';
import literaryTechnique from './literaryTechniqueReducer';
import form from './formReducer';
import category from './categoryReducer';
import reportReducer from './reportReducer';

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
  project, // reducer for projects storage and deletion
  rule,
  flagReducer, // stores flagged words for the created or chosen project
  educator, // stores educator info for educator page and message status for delete educator functionality
  biasDataReducer, // stores autoML bias information from DB for chosen project
  step,
  tone,
  literaryTechnique, // stores literary techniques from the GET request to literary_techniques table in DB
  reportReducer,
  form, // holds all form data for create project form
  category, // stores bias entries from DB
});

export default rootReducer;
