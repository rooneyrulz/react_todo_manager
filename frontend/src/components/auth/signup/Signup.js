import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, NavLink, ModalHeader, ModalBody } from "reactstrap";

// Components
import SignupForm from "../../forms/SignupForm";

// Redux
import { registerUser } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";

class Signup extends Component {
  state = {
    modal: false,
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    registerUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for error id
      if (error.id === "REGISTER_FAIL") {
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
    this.props.clearErrors();
    this.setState(prevState => ({
      ...prevState,
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Fragment>
        <NavLink href="#!" color="danger" onClick={this.toggle}>
          SIGN UP
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <SignupForm
              registerUser={this.props.registerUser}
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
  { registerUser, clearErrors }
)(Signup);
