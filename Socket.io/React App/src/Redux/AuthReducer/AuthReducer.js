import {
    Auth_Sign_In_Error,
    Auth_Sign_In_Loading,
    Auth_Sign_In_Success,
    Auth_Sign_out
} from './ActionTypes'

const iState = {
    isAuth:false,
    loading:false,
    error:false
}

export const AuthReducer = (state=iState, {type, payload}) => {
    switch(type){
        case Auth_Sign_In_Error:{
            return ({
                ...state,
                loading:false,
                error:true
            })
        }
        case Auth_Sign_In_Success:{
            return ({
                ...state,
                loading:false,
                error:false,
                isAuth:true

            })
        }
        case Auth_Sign_In_Loading:{
            return ({
                ...state,
                loading:true,
                error:false
            })
        }
        case Auth_Sign_out:{
            return ({
                ...state.isAuth,
                loading:false,
                error:false,
                isAuth:false
            })
        }
        default:{
            return state;
        }
    }
}