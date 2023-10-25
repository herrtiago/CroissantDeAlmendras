import * as React from 'react';
import style from './SideBar.module.css'
import Menu from './components/Menu';
import MenuFooter from './components/MenuFooter';
import useToggle from '../../hooks/ToggleHook';
import SidebarHeader from './components/SidebarHeader';


const SideBar: React.FunctionComponent = () => {
    const { handleToggle, activeClass } = useToggle(true,style.close);
    return (
        <>
            <nav className={`${style.sidebar} ${activeClass}`}>
                <SidebarHeader userName={'Invitado'} estado={'Online'} handelToggle={handleToggle}/>
                <div className={style.menu_bar}>
                    <Menu/>
                    <MenuFooter/>
                </div>
            </nav>
        </>
    );
};

export default SideBar;
