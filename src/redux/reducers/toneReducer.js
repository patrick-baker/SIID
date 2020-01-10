// stores tones from the GET request to literary_techniques table in DB
const toneReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TONE':
        return action.payload;
      default:
        return state; 
  }
}
  export default toneReducer;