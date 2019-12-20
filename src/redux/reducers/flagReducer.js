const flagReducer = (state = {}, action) => {
    if (action.type === "SET_FLAGS") {
        return action.payload
    }
    return state;
};

// user will be on the redux state at:
// state.user
export default flagReducer;