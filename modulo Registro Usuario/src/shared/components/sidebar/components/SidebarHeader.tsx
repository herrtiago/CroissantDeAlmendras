import * as React from 'react';
import style from '../SideBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import useSidebar from '../hook/SidebarHook';
interface ISidebarHeaderProps {
    handelToggle: () => void;
    profileIcon?: string;
}

const SidebarHeader: React.FunctionComponent<ISidebarHeaderProps> = ({ handelToggle }) => {
    const {user} = useSidebar();
    return (
        <header>
            <div className={style.image_text}>
                <span className={style.image}>
                    <img src="vite.svg" alt="logo" />
                </span>
                <div className={`${style.text} ${style.header_text}`}>
                    <span className={style.name}>
                        {user != undefined
                        ?user.userName
                        :'Invitado'}
                    </span>
                    <span className={style.profession}>
                        {user != undefined
                        ?user.email
                        :''}
                    </span>
                </div>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className={style.toggle} onClick={handelToggle} />
        </header>
    );
};

export default SidebarHeader;
