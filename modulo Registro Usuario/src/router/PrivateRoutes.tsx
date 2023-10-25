import * as React from 'react';
import { AuthContextType } from '../types/AuthTypes';
import { AuthContext } from '../context/auth/AuthContext';
import { Navigate } from 'react-router-dom';

interface IPrivateRoutesProps {
    children: React.ReactNode
}

const PrivateRoutes: React.FunctionComponent<IPrivateRoutesProps> = ({ children }) => {
    const { isLoggedIn } = React.useContext<AuthContextType>(AuthContext as React.Context<AuthContextType>);

    return (isLoggedIn)
        ? children
        : <Navigate to="/" />
};

export default PrivateRoutes;
