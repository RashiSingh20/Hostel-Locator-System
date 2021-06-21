export const initialState = {
    name: '',
    place: '',
    city: '',
    display: [],
    user: null,
<<<<<<< HEAD
    info: null,
    message : {
        successMessage: '',
        errorMessage: ''
    }
=======
    info: null
>>>>>>> 346f0dec8fe00e360864861cdd99bb181333ff9f
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
<<<<<<< HEAD
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
=======

>>>>>>> 346f0dec8fe00e360864861cdd99bb181333ff9f
        default:
            return state;
    }
};

export default reducer;
