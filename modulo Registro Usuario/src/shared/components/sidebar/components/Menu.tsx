import * as React from 'react';
import style from '../SideBar.module.css'
import MenuOption from './MenuOption';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useSidebar from '../hook/SidebarHook';

const Menu: React.FunctionComponent = () => {
    const {navigateTo} = useSidebar()
    return (
        <div className={style.menu}>
            <u className={style.menu_links}>
                <MenuOption
                    name='Home'
                    icon={faHouse} action={()=>{navigateTo('/home',false)}} />
                <MenuOption
                    name='Shopping Card'
                    icon={faCartShopping} action={()=>{navigateTo('/shopingcart',false)}} />

            </u>
        </div>
    );
};

export default Menu;
