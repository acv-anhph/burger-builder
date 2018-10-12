import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//   return (props) => {
//     return (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )}
// };

const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    componentWillReceiveProps(nextProps) {
      console.log('withClass');
      console.log(nextProps);
    }

    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} ref={this.props.forwardedRef}/>
        </div>
      )
    }
  };

  return React.forwardRef((props, ref) => {
    console.log('withClass');
    console.log(props);
    return <WithClass {...props} forwardedRef={ref}/>
  })
};

export default withClass;
