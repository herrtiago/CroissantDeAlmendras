/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import style from '../SideBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface IMenuOptionProps {
    name:string,
    icon:IconProp
    action:()=>void
}

const MenuOption: React.FunctionComponent<IMenuOptionProps> = ({name, icon, action}) => {
  return (
    <li className={style.nav_link}>
            <a onClick={action}>
                <FontAwesomeIcon icon={icon} className={style.icon}/>
                <span className={`${style.text} ${style.nav_text}`}>
                    {name}
                </span>
            </a>
        </li>
  );
};

export default MenuOption;
