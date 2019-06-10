import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink,
  NavbarToggler,
  Container,
  Collapse
} from 'reactstrap';

import Signup from '../../components/auth/signup/Signup';

const AppHeader = () => {
  const [state, setState] = useState({ isOpen: false });

  const toggle = () => {
    setState((prev) => {
      return { ...prev, isOpen: !prev.isOpen };
    });
  }
  return (
    <Navbar dark color="dark" expand="sm">
      <Container>
        <NavbarBrand href="/home">Todo Manager</NavbarBrand>
        <NavbarToggler onClick={ toggle } />
        <Collapse isOpen={ state.isOpen } className="navbar-collapse">
          <Nav className="navbar-nav">
            <NavItem>
              <NavLink href="/home">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/todos">TODOS</NavLink>
            </NavItem>
            <NavItem>
              <Signup />
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default AppHeader;
