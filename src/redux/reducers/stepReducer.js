const stepReducer = (state = 0, action) => {
    switch (action.type) {
        case 'NEXT_STEP':
            return state + 1;
        case 'RESET_STEPPER':
            return 0;
        default: 
            return state;
    }
}

export default stepReducer;