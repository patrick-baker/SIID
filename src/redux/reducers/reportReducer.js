const defaultState = {
    educators:[]
}
// stores information to be displayed in report, other than chart information
const reportReducer = (state = defaultState, action) => {
    // metadata call for report
    if (action.type === 'SET_REPORT') {
        return {...state, ...action.payload};
    // adds educator information for chosen chart
    } else if (action.type === 'SET_PROJECT_EDUCATORS') {
        return {...state, educators: action.payload}
    // changes text of report if it is changed on report page
    } else if (action.type=== 'EDIT_TEXT') {
        return {...state, text:action.payload}
    }
    // clears report reducer on component unmounting
    if (action.type === 'CLEAR_REPORT') {
        return defaultState
    }
    return state;
  };
  
  export default reportReducer;
  
