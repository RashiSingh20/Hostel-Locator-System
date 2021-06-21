export const initialState = {
    name: '',
    place: '',
    city: '',
    display: [],
    user: null,
    info: null,
    message : {
        successMessage: '',
        errorMessage: ''
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'SET_PLACE':
            return {
                ...state,
                place: action.place
            };
        case 'SET_CITY':
            return {
                ...state,
                city: action.city
            };
        case "SET_DISPLAY":
            return {
                ...state,
                display: action.display
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "INFO":
            return {
                ...state,
                info: action.info
            };
        case "DISPLAY_MESSAGE":
            return {
                ...state,
                message: action.message
            };
        case 'CLEAR_MESSAGES':
            return {
                message: {
                    successMessage: '',
                    errorMessage: ''
                }
            };
        default:
            return state;
    }
};

export default reducer;