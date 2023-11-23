const initialState = {
    user: null,
    error: null
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case 'REGISTER_ERROR':
            return {
                ...state,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
}

export default usersReducer;