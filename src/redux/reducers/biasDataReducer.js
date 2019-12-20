const biasDataReducer = (state = {}, action) => {
    if (action.type === 'SET_BIAS_DATA') {
        return action.payload;
    }
    return state;
};

export default biasDataReducer;