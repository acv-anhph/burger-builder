import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[persons.js] in constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[persons.js] in componentWillMount');
  }

  componentDidMount() {
    console.log('[persons.js] in componentDidMount');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Update Persons.js] inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update Persons.js] inside shouldComponentUpdate', nextProps, this.props.persons, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //          nextProps.clicked !== this.props.clicked ||
  //          nextProps.changed !== this.props.changed;
  //   // return true;
  // }


  componentWillUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] inside componentWillUpdate', nextProps, nextState);
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('[Update Persons.js] inside componentDidUpdate', prevProps, prevState);
  }


  render() {
    console.log('[persons.js] in render');
    return this.props.persons.map((person, index) => {
      return <Person
        position={index}
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        ref={this.lastPersonRef}
      />
    });
  }
}

export default Persons;
