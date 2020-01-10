import { combineReducers } from "redux";

// stores all educators to be rendered on educator page
const educatorReducer = (state = [], action) => {
    if (action.type === 'SET_EDUCATORS') {
        return action.payload;
    }
        return state;
 
  };

// changes error message and its status for rendering on the educator page when attempting to delete
const educatorDeleteStatus = (state = {
    showError: false,
    messageFromServer: '',
}, action) => {
    switch (action.type) {
        case 'EDUCATOR_DEL_SUCCESS':
            return {
                showError: false,
                messageFromServer: 'delete success',
            };
        case 'EDUCATOR_DEL_FAILURE':
            return {
                showError: true,
                messageFromServer: 'delete failure',
            }
        case 'EDUCATOR_DEL_RESET':
            return {
                showError: false,
                messageFromServer: '',
            }    
        default:
            return state;
    }
};

  export default combineReducers({
      educatorDeleteStatus,
      educatorReducer
  })