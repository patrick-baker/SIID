import { combineReducers } from "redux";

const educatorReducer = (state = [], action) => {
    if (action.type === 'SET_EDUCATORS') {
        return action.payload;
    }
        return state;
 
  };


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