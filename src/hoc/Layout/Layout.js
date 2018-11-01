import React, {Component} from 'react';
import Aux from '../Aux/_Aux';
import classes from './Layout.css';
import Header from '../../Components/Header/Header';
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedhandler = () => {
    this.setState({showSideDrawer: false});
  };

  sideDrawerTogglehandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  };

  render() {
    return (
      <Aux>
        <Header drawerToggleClicked={this.sideDrawerTogglehandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;