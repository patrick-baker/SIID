import { combineReducers } from "redux";

const data = (state = {}, action) => {
    if (action.type === 'SET_BIAS_DATA') {
        return action.payload;
    }
    return state;
};

const status = (state = {
    isDone: false,
    messageFromServer: '',
}, action) => {
    switch (action.type) {
        case 'AUTO_ML_DONE':
            return {
                isDone: true,
                messageFromServer: 'bias back',
            };
        case 'AUTO_ML_FAILURE':
            return {
                isDone: true,
                messageFromServer: 'bias failure',
            }
        case 'AUTO_ML_RESET':
            return {
                // this could mean that we aren't back yet
                isDone: false,
                messageFromServer: '',
            }
        default:
            return state;
    }
};

export default combineReducers({
    data,
    status
});