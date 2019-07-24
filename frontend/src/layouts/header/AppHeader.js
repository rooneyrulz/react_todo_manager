import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Container,
  Collapse
} from 'reactstrap';

// Components
import NavLinks from '../navlinks/NavLinks';

// Redux
import { logOutUser } from '../../actions/authActions';

const AppHeader = ({ auth: { isAuthenticated }, logOutUser }) => {
  const [state, setState] = useState({ isOpen: false });

  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };
  return (
    <Navbar className="AppNavbar py-3" dark expand="md">
      <Container>
        <NavbarBrand href="/home">Todo Manager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} className="navbar-collapse">
          <NavLinks
            isAuthenticated={isAuthenticated}
            logOutUser={logOutUser}
          />
        </Collapse>
      </Container>
    </Navbar>
  );
};

AppHeader.propTypes = {
  auth: PropTypes.object.isRequired,
  logOutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(AppHeader);
