import React from 'react';
import classes from './Header.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const Header = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default Header;