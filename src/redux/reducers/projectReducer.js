import { combineReducers } from 'redux';

// stores the array of projects to be displayed on the landing page
const projectReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROJECT':
        return action.payload;
      case 'CLEAR_PROJECT':
        return [];
      default:
        return state;
    }
  };
  
// stores message status and message for delete project functionality
  const projectDeleteStatus = (state = {
    showError: false,
    messageFromServer: '',
}, action) => {
    switch (action.type) {
        case 'PROJECT_DEL_SUCCESS':
            return {
                showError: false,
                messageFromServer: 'delete success',
            };
        case 'PROJECT_DEL_FAILURE':
            return {
                showError: true,
                messageFromServer: 'delete failure',
            }
        case 'PROJECT_DEL_RESET':
            return {
                showError: false,
                messageFromServer: '',
            }    
        default:
            return state;
    }
};

// reducer for projects storage and deletion
export default combineReducers({
    projectReducer,
    projectDeleteStatus
})
  
