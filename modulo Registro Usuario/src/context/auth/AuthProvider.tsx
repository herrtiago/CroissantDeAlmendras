import * as React from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';
import { AuthAction, AuthState, User, UserLogin, types } from '../../types/AuthTypes';

interface IAuthProviderProps {
    children: React.ReactNode
}

const initialState: AuthState = {
    isLoggedIn:false,
    user:undefined,
}

const init = ():AuthState =>{
    const user:User|null  = JSON.parse(localStorage.getItem('user') as string);
    return{
        isLoggedIn:user!=null?true:false,
        user:user!=null?user:undefined,
    }
}

const AuthProvider: React.FunctionComponent<IAuthProviderProps> = ({children}) => {
    const [authState, dispatch] = React.useReducer(authReducer, initialState, init);
    
    const login = async(user:UserLogin) =>{
        const action : AuthAction = {
            type: types.login,
            payload: {
                email:user.email,
                userName:user.email
            }
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

    const logout = async() =>{
        localStorage.removeItem('user')
        const action : AuthAction = {
            type: types.logout,
            payload: undefined
        }
        dispatch(action)
    }
    return (
    <AuthContext.Provider value={{
        ...authState,
        login:login,
        logout:logout
        }}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
