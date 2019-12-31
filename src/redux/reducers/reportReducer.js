const reportReducer = (state = {}, action) => {
    if (action.type === 'SET_REPORT') {
        return action.payload;
    }
    return state;
  };
  
  export default reportReducer;
  
