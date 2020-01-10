// stores literary techniques from the GET request to literary_techniques table in DB
const literaryTechniqueReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LITERARY_TECHNIQUES':
        return action.payload;
      default:
        return state; 
  }
}
 
export default literaryTechniqueReducer;