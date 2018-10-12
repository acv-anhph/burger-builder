import React, {Component} from 'react';
import PersonClasses from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/_Aux';
import PropTypes from 'prop-types';
import {AuthContext} from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[person.js] in constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[person.js] in componentWillMount');
  }

  componentDidMount() {
    console.log('[person.js] in componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus = () => {
    this.inputElement.current.focus();
  };

  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>

        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElement}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(Person, PersonClasses.Person);