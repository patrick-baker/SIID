const defaultState = {
    educators:[]
}
const reportReducer = (state = defaultState, action) => {
    if (action.type === 'SET_REPORT') {
        return {...state, ...action.payload};
    } else if (action.type === 'SET_PROJECT_EDUCATORS') {
        return {...state, educators: action.payload}
    }
    if (action.type === 'CLEAR_REPORT') {
        return defaultState
    }
    return state;
  };
  
  export default reportReducer;
  
