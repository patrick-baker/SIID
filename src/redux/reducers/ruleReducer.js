
import { combineReducers } from 'redux';

const ruleReducer = (state = [{}], action) => {
    switch (action.type) {
      case 'SET_RULES':
        return action.payload;
      default:
        return state; 
  }
}
// const baseRule = {
//           "id": "",
//           "type": "simple",
//           "categories": [
//             "a"
//           ],
//           "considerate": {
            
//           },
//           "inconsiderate": {
            
//           },
//           "note": "Refer to the person, rather than the disability, first."
//         }
// const ruleCreator = (state = [{}], action) => {
//     switch (action.type) {
//       case 'SET_RULES':
//         return action.payload;
//       default:
//         return state; 
//   }
// }
  // user will be on the redux state at:
  // state.user

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
        default:
            return state;
    }
};
  export default combineReducers({
      ruleReducer,
      ruleDeleteStatus,
  })

