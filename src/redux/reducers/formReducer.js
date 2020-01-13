// live stores metadata for the createProject form
const formReducer = (state = {formal: true}, action) => {
    switch (action.type) {
        // clears all metadata from form on component unMounting
        case 'CLEAR_FORM_METADATA':
            return {formal: true};
        // stores updated metadata property value on change
        case 'SET_FORM_METADATA':
            return { ...state, [action.payload.property]: action.payload.value };
            case 'SET_FORM_AUTOFILL':
            return { ...state, ...action.payload};
        // initially sets tones from GET request to tone tables
        case 'INITIALIZE_FORM_TONE':
            return {
                ...state, tones: {
                    ...state.tones,
                    [action.payload.property]: false
                }
            }
        // flips boolean of chosen tone
        case 'FLIP_FORM_TONE':
            return {
                ...state, tones: {
                    ...state.tones,
                    [action.payload.property]: !state.tones[action.payload.property]
                }
            }
        // initially sets literary techniques from GET request to tone tables
        case 'INITIALIZE_FORM_LITERARY_TECHNIQUES':
            return {
                ...state, literaryTechniques: {
                    ...state.literaryTechniques,
                    [action.payload.property]: false
                }
            }
        // flips boolean of chosen literary technique
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

export default formReducer;