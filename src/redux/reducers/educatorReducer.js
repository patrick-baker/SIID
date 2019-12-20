const educatorReducer = (state = [], action) => {
    if (action.type === 'SET_EDUCATORS') {
        return action.payload;
    }
        return state;
    //}
  };
  
  // user will be on the redux state at:
  // state.user
  export default educatorReducer;