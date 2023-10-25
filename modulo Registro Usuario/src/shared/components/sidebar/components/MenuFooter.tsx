import * as React from 'react';
import style from '../SideBar.module.css'
import MenuOption from './MenuOption';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import MenuOptionToggle from './MenuOptionToggle';
import useSidebar from '../hook/SidebarHook';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const MenuFooter: React.FunctionComponent = () => {
    const { handleLogOut, navigateTo, user } = useSidebar();
    return (
        <div className={style.menu_footer}>
            {user != undefined
                ? (<MenuOption name={'LogOut'} icon={faRightFromBracket} action={handleLogOut} />)
                : (<MenuOption name={'LogIn'} icon={faRightToBracket} action={() => { navigateTo('/auth', true) }} />)}
            <MenuOptionToggle />
        </div>
    );
};

export default MenuFooter;
