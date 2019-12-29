const formReducer = (state = {radioValue: 'Formal'}, action) => {
    switch (action.type) {
        case 'SET_FORM_METADATA':
            return { ...state, [action.payload.property]: action.payload.value };
        case 'INITIALIZE_FORM_TONE':
            return {
                ...state, tones: {
                    ...state.tones,
                    [action.payload.property]: false
                }
            }
        case 'FLIP_FORM_TONE':
            return {
                ...state, tones: {
                    ...state.tones,
                    [action.payload.property]: !state.tones[action.payload.property]
                }
            }
        case 'INITIALIZE_FORM_LITERARY_TECHNIQUES':
            return {
                ...state, literaryTechniques: {
                    ...state.literaryTechniques,
                    [action.payload.property]: false
                }
            }
        case 'FLIP_FORM_LITERARY_TECHNIQUES':
            return {
                ...state, literaryTechniques: {
                    ...state.literaryTechniques,
                    [action.payload.property]: !state.literaryTechniques[action.payload.property]
                }
            }
        default:
            return state;
    }
}
// user will be on the redux state at:
// state.user
export default formReducer;