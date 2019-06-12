import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  Container,
  Collapse
} from "reactstrap";

import Signup from "../../components/auth/signup/Signup";
import Login from "../../components/auth/login/Login";

const AppHeader = () => {
  const [state, setState] = useState({ isOpen: false });

  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };
  return (
    <Navbar dark color="dark" expand="sm">
      <Container>
        <NavbarBrand href="/home">Todo Manager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} className="navbar-collapse">
          <Fragment>
            <Nav className="navbar-nav ml-auto">
              <NavItem>
                <Signup />
              </NavItem>
              <NavItem>
                <Login />
              </NavItem>
            </Nav>
          </Fragment>
          <Fragment>
            <Nav className="navbar-nav ml-auto">
              <NavItem>
                <NavLink className="nav-link" exact to="/home">
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" exact to="/todos">
                  TODOS
                </NavLink>
              </NavItem>
            </Nav>
          </Fragment>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
