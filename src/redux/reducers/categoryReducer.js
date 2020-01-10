// stores bias categories from bias table
const categoryReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CATEGORY':
        return action.payload;
      case 'CLEAR_CATEGORY':
        return [];
      default:
        return state;
    }
  };

  export default categoryReducer;