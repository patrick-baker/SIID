const stepReducer = (state = 0, action) => {
    if (action.type === 'NEXT_STEP') {
        return state + 1
    // } else if (action.type === 'BACK') {
    //     return state - 1
    // } else if (action.type === 'RESET') {
    //     return 0
    // } else if (action.type === 'SET') {
    //     return action.payload
    }
    return state
}

export default stepReducer;