import React from 'react';
import s from './Header.module.css';
import NavMenu from "./NavMenu/NavMenu";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <NavMenu/>
            </div>
        </div>
    )
};

export default Header;