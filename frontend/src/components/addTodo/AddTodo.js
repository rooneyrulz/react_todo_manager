import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap";

import AddTodoForm from "../forms/AddTodoForm";

import { addTodo } from "../../actions/todoActions";
import { clearErrors } from "../../actions/errorActions";

class AddTodo extends Component {
  state = {
    modal: false,
    msg: null
  };

  componentDidUpdate(prevProps) {
    const { error, isAdded } = this.props;
    const { modal } = this.state;

    if (error !== prevProps.error) {
      // Check for Id
      if (error.id === "ADD_ITEM_FAIL") {
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

    if (modal) {
      // Check for isAdded
      if (isAdded) {
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
        <Button className="" color="dark" onClick={this.toggle}>
          New Todo
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Create One</ModalHeader>
          <ModalBody>
            <AddTodoForm addTodo={this.props.addTodo} error={this.state.msg} />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAdded: state.todo.isAdded,
  error: state.error
});

export default connect(
  mapStateToProps,
  { addTodo, clearErrors }
)(AddTodo);
