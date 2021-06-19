export const initialState = {
    name: '',
    place: '',
    city: '',
    display: [
    //     {
    //      hostelname :'',
    //      state: '',
    //      price : '',
    //  hostelink: '',
    //  email: '',
    //  desc: '',
    // }
],
user: null, 
info: null
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
                display: [...state.display, ...action.display]
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

        default:
            return state;
    }
};

export default reducer;