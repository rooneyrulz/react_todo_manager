import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, NavLink, ModalHeader, ModalBody } from "reactstrap";

import LoginForm from "../../forms/LoginForm";

import { loginUser } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";

class Login extends Component {
  state = {
    modal: false,
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;

    if (error !== prevProps.error) {
      // Check for error id
      if (error.id === "LOGIN_FAIL") {
        this.setState(prevState => ({
          ...prevState,
          msg: error.msg
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          msg: null
        }));
      }
    }

    if (this.state.modal) {
      if (this.props.isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    clearErrors();
    this.setState(prevState => ({
      ...prevState,
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Fragment>
        <NavLink href="#!" color="danger" onClick={this.toggle}>
          SIGN IN
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <LoginForm
              loginUser={this.props.loginUser}
              error={this.state.msg}
              isAuthenticated={this.props.isAuthenticated}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { loginUser, clearErrors }
)(Login);
