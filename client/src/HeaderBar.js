import React from 'react';
import DrawerLeft from './DrawerMenu';
import Logo from './images/wi-logo.png';

const HeaderBar = () => (
	<div>
		<div className="logo wrapper__logo">
			<img src={Logo} alt="Site Logo"/>
		</div>
		<DrawerLeft/>
	</div>
);

export default HeaderBar;
