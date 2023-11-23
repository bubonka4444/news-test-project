import axios from 'axios';


export const registerUser = (email, name) => {
    return (dispatch) => {
        axios.post('http://localhost:3000/users', { email, name })
            .then((res) => {
                dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });

            })
            .catch((err) => {
                dispatch({ type: 'REGISTER_ERROR', payload: err.message });
            });
    };
};

