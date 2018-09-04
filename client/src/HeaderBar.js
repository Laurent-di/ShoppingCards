import React from 'react';
import DrawerLeft from './DrawerMenu';

const HeaderBar = () => (
    <div>
        <div className="logo wrapper__logo">
            <img src="wi-logo.png" alt="Site Logo" />
        </div>
        <DrawerLeft/>
    </div>
);

export default HeaderBar;
