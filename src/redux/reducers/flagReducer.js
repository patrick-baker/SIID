// stores flagged words for the created or chosen project report
const flagReducer = (state = {}, action) => {
    if (action.type === "SET_FLAGS") {
        return action.payload
    }
    return state;
};

export default flagReducer;