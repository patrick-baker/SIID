
import { combineReducers } from 'redux';

const ruleReducer = (state = [{}], action) => {
    switch (action.type) {
      case 'SET_RULES':
        return action.payload;
      default:
        return state; 
  }
}
  // user will be on the redux state at:
  // state.user
  export default combineReducers({
      ruleReducer,
  })

