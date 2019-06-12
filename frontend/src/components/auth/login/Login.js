import React, { Component, Fragment } from "react";
import { Modal, NavLink, ModalHeader, ModalBody } from "reactstrap";

import LoginForm from "../../forms/LoginForm";

class Login extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
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
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <LoginForm toggle={this.toggle} />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default Login;
