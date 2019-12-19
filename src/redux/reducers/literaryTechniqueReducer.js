
import { combineReducers } from 'redux';

const literaryTechniqueReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LITERARY_TECHNIQUES':
        return action.payload;
      default:
        return state; 
  }
}
  // user will be on the redux state at:
  // state.user
  export default literaryTechniqueReducer;