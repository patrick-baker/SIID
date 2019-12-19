import { combineReducers } from 'redux';

const toneReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TONE':
        return action.payload;
      default:
        return state; 
  }
}
  // user will be on the redux state at:
  // state.user
  export default toneReducer;