const reportReducer = (state = {}, action) => {
    if (action.type === 'SET_REPORT') {
        return action.payload;
    }
    if (action.type === 'CLEAR_REPORT') {
        return {}
    }
    return state;
  };
  
  export default reportReducer;
  
