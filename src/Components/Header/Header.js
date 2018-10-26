import React from 'react';
import classes from './Header.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';


const Header = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <div>MENU</div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default Header;