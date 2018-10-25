import React from 'react';
import classes from './Header.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';


const Header = (props) => (
  <header className={classes.Toolbar}>
    <Logo/>
    <div>MENU</div>
    <NavigationItems/>
  </header>
);

export default Header;