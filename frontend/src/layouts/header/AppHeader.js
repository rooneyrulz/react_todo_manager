import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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

import { logOutUser } from "../../actions/authActions";

const AppHeader = ({ isAuthenticated, logOutUser }) => {
  const [state, setState] = useState({ isOpen: false });

  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };
  return (
    <Navbar dark color="dark" expand="md">
      <Container>
        <NavbarBrand href="/home">Todo Manager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} className="navbar-collapse">
          <Fragment>
            <Nav className="navbar-nav ml-auto">
              {isAuthenticated ? (
                <NavItem>
                  <NavLink onClick={logOutUser} className="nav-link" to="#!">
                    SIGN OUT
                  </NavLink>
                </NavItem>
              ) : (
                <Fragment>
                  <NavItem>
                    <Signup />
                  </NavItem>
                  <NavItem>
                    <Login />
                  </NavItem>
                </Fragment>
              )}
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

AppHeader.propTypes = {
  isAuthenticated: PropTypes.bool,
  logOutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(AppHeader);
