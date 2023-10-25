import { AuthAction, AuthState, types } from "../../types/AuthTypes";

export const  authReducer = (state : AuthState, action: AuthAction) : AuthState =>{
    switch(action.type){
        case types.login:
            return {
                ...state, 
                isLoggedIn: true,
                user:action.payload!
            };
        case types.logout:
            return {
                isLoggedIn:false,
                user:undefined
            };
        default:
            return state;
    }
}