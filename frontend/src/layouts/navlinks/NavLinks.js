import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { NavItem, Nav } from "reactstrap";

import Signup from "../../components/auth/signup/Signup";
import Login from "../../components/auth/login/Login";

const NavLinks = ({ isAuthenticated, logOutUser }) => {
  return (
    <Fragment>
      <Fragment>
        <Nav className="navbar-nav ml-auto">
          {isAuthenticated ? (
            <Fragment>
              <NavItem>
                <NavLink
                  onClick={logOutUser}
                  className="nav-link"
                  to="#!"
                >
                  SIGN OUT
                </NavLink>
              </NavItem>
            </Fragment>
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
          {isAuthenticated ? (
            <Fragment>
              <NavItem>
                <NavLink className="nav-link" exact to="/dashboard">
                  DASHBOARD
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" exact to="/store">
                  STORE
                </NavLink>
              </NavItem>
            </Fragment>
          ) : (
            <Fragment>
              <NavItem>
                <NavLink className="nav-link" exact to="/home">
                  HOME
                </NavLink>
              </NavItem>
            </Fragment>
          )}
          <NavItem>
            <NavLink className="nav-link" exact to="/todos">
              TODOS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" exact to="/about">
              ABOUT
            </NavLink>
          </NavItem>
        </Nav>
      </Fragment>
    </Fragment>
  );
};

export default NavLinks;
