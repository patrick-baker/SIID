import { combineReducers } from 'redux';

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

export default combineReducers({
    projectReducer,
    projectDeleteStatus
})
  
