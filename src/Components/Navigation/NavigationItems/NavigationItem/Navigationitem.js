import React from 'react';
import classes from './NavigationItem.css';

const Navigationitem = (props) => (
  <li className={classes.NavigationItem}>
    <a
      href={props.link}
      className={props.isActive ? classes.active : null}
    >{props.children}</a>
  </li>
);

export default Navigationitem;