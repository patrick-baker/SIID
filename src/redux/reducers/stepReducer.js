// changes stage of stepper on createProject form page
const stepReducer = (state = 0, action) => {
    switch (action.type) {
        // moves stepper forward
        case 'NEXT_STEP':
            return state + 1;
        // resets stepper to beginning on project finish
        case 'RESET_STEPPER':
            return 0;
        default: 
            return state;
    }
}

export default stepReducer;