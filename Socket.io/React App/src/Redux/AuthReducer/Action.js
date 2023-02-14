import {
    Auth_Sign_In_Error,
    Auth_Sign_In_Loading,
    Auth_Sign_In_Success,
    Auth_Sign_Up_Error,
    Auth_Sign_Up_Loading,
    Auth_Sign_Up_Success,
    Auth_Sign_out
} from './ActionTypes.js'
import axios from 'axios';

export const Auth_Sign_UP = (data, onSuccess, onError) => async (dispatch) => {
    dispatch({ type: Auth_Sign_Up_Loading });

    const { email, password } = data;
    try {
        let response = await axios.post('https://fragile-plum-cocoon.cyclic.app/signup', { email, password });
        if (response.error) {
            dispatch({ type: Auth_Sign_In_Error });
            if (onError) {
                onError();
            }
            return
        }
        dispatch({ type: Auth_Sign_Up_Success });
        if (onSuccess) {
            onSuccess();
        }

    } catch (err) {
        dispatch({ type: Auth_Sign_Up_Error });
        if (onError) {
            onError();
        }
    }
}
export const Auth_Sign_In = (data, onSuccess, onError) => async (dispatch) => {
    dispatch({ type: Auth_Sign_In_Loading });


    const { email, password } = data;
    try {
        let response = await axios.post('https://fragile-plum-cocoon.cyclic.app/signin', { email, password });
        if (response.error) {
            dispatch({ type: Auth_Sign_In_Error });
            if (onError) {
                onError();
            }
            return
        }
        dispatch({ type: Auth_Sign_In_Success });
        if (onSuccess) {
            onSuccess();
        }

    } catch (err) {
        dispatch({ type: Auth_Sign_In_Error });
        if (onError) {
            onError();
        }
    }
}

export const Sign_out = () => async (dispatch, onSuccess) => {
    dispatch({ type: Auth_Sign_out });
    if (onSuccess) {
        onSuccess();
    }
}