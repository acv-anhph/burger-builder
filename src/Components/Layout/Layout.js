import React from 'react';
import Aux from '../../hoc/_Aux';
import classes from './Layout.css';
import Header from '../Header/Header';

const Layout = props => {
  return (
    <Aux>
      <Header></Header>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default Layout;
