import * as React from 'react';
import { Route, Routes} from 'react-router-dom'
import AuthPage from '../auth/AuthPage';
import { EcommerceRoutes } from '../pages/ecommerce/routes/EcommerceRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter: React.FunctionComponent = () => {
  return (
    <>
        <Routes>
            <Route path='auth' element={
              <PublicRoutes>
                <AuthPage />
              </PublicRoutes>
            }/>
            <Route path='/*' element={<EcommerceRoutes/>}/>
        </Routes>
        
    </>
  );
};

export default AppRouter;
