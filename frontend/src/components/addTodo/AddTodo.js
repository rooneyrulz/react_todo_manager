import React, { Component, Fragment } from 'react';
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap";

import AddTodoForm from "../forms/AddTodoForm";

class AddTodo extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <Fragment>
        <Button className="" color="dark" onClick={this.toggle}>
          New Todo
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <AddTodoForm />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}


export default AddTodo;
