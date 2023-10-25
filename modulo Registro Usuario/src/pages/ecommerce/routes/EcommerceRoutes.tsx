import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home/HomePage'
import { ShoppingCart } from '../pages/shoppingCart/ShoppingCart'
import SideBar from '../../../shared/components/sidebar/Sidebar'
import style from './Ecommerce.module.css'
import PrivateRoutes from '../../../router/PrivateRoutes'

export const EcommerceRoutes = () => {
    return (
        <div className={style.body}>
                <SideBar />
            <div className={style.pages}>
                <Routes>
                    <Route path='home' element={<HomePage />} />
                    <Route path='/shopingcart' element={
                        <PrivateRoutes>
                            <ShoppingCart />
                        </PrivateRoutes>
                    } />
                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </div>
        </div>
    )
}