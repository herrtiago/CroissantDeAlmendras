import * as React from 'react';
import { AuthContextType } from '../types/AuthTypes';
import { AuthContext } from '../context/auth/AuthContext';
import { Navigate } from 'react-router-dom';

interface IPublicRoutesProps {
    children: React.ReactNode
}

const PublicRoutes: React.FunctionComponent<IPublicRoutesProps> = ({ children }) => {
    const { isLoggedIn } = React.useContext<AuthContextType>(AuthContext as React.Context<AuthContextType>);

    return (!isLoggedIn)
        ? children
        : <Navigate to="/home" />
};

export default PublicRoutes;
