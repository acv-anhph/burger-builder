import React from 'react';
import classes from "./Cockpit.css";
import Aux from '../../hoc/_Aux';

const cockpit = (props) => {
  const signedClasses = [];
  let btnClasses = classes.Button;

  if (props.showPerson) {
    btnClasses = [classes.red, classes.Button].join(' ');
  }

  if (props.persons.length <= 2) {
    signedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    signedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>test</h1>
      <p className={signedClasses.join(' ')}>This is really work</p>
      <button
        onClick={props.togglePersonhandler}
        className={btnClasses}
      >Toggle person
      </button>
      <button
        onClick={props.login}
        className={btnClasses}
      >Login
      </button>

    </Aux>
  );
};

export default cockpit;