const ruleReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROJECT':
        return action.payload;
      case 'CLEAR_PROJECT':
        return [];
      default:
        return state;
    }
  };
  
  export default ruleReducer;