
import { combineReducers } from 'redux';

// stores rules to be displayed on the rules view for admins
const ruleReducer = (state = [{}], action) => {
    switch (action.type) {
      case 'SET_RULES':
        return action.payload;
      default:
        return state; 
  }
}

// reducer for storing status and message for delete rule functionality
  const ruleDeleteStatus = (state = {
    showError: false,
    messageFromServer: '',
    showNullError: false,
}, action) => {
    switch (action.type) {
        case 'RULE_DEL_SUCCESS':
            return {
                showError: false,
                messageFromServer: 'delete success',
                showNullError: false,
            };
        case 'RULE_DEL_FAILURE':
            return {
                showError: true,
                messageFromServer: 'delete failure',
                showNullError: false,
            }
        case 'RULE_DEL_RESET':
            return {
                showError: false,
                messageFromServer: '',
                showNullError: false,
            }    
        default:
            return state;
    }
};
  export default combineReducers({
      ruleReducer,
      ruleDeleteStatus,
  })

