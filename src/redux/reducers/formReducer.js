const formReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_FORM_METADATA':
        return {...state, [action.payload.property]: action.payload.value};
      default:
        return state; 
  }
}
  // user will be on the redux state at:
  // state.user
  export default formReducer;