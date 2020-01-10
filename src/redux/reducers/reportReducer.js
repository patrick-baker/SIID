const reportReducer = (state = {}, action) => {
    if (action.type === 'SET_REPORT') {
        return {...state, ...action.payload};
    } else if (action.type === 'SET_PROJECT_EDUCATORS') {
        return {...state, educators: action.payload}
    } else if (action.type=== 'EDIT_TEXT') {
        return {...state,text:action.payload}
    }
    if (action.type === 'CLEAR_REPORT') {
        return {}
    }
    return state;
  };
  
  export default reportReducer;
  
