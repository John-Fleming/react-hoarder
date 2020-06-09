import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">My Stuff</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">New</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Logout</NavLink>
          </NavItem>
        </Nav>
      );
    };

    return (
      <div className="MyNavbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React Hoarder</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
        {/* <button className="btn btn-outline-dark" onClick={this.logMeOut}>Logout</button> */}
      </div>
    );
  }
}

export default MyNavbar;
