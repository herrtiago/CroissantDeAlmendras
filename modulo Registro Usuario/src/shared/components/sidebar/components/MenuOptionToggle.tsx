/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import style from '../SideBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun';
interface IMenuOptionToggleProps {
}

const MenuOptionToggle: React.FunctionComponent<IMenuOptionToggleProps> = (props) => {
    return (
        <li className={style.mode}>
            <div className={style.modes}>
                <FontAwesomeIcon icon={faSun} className={`${style.icon} ${style.first_mode}`}/>
                <FontAwesomeIcon icon={faMoon} className={`${style.icon} ${style.second_mode}`}/>
            </div>
            <span className={`${style.mode_text} ${style.text}`}>
                Dark Mode
            </span>
            <div className={style.toggle_switch}>
                <span className={style.switch}>

                </span>
            </div>
        </li>
    );
};

export default MenuOptionToggle;
