import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

const AddTodoForm = ({ addTodo, error }) => {
  const [formData, setFormData] = useState({
    name: ""
  });

  const { name } = formData;

  const onHandleChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onHandleSubmit = e => {
    e.preventDefault();
    const payload = {
      name
    };
    addTodo(payload);
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      {error !== null && <Alert color="danger">{error}</Alert>}
      <FormGroup>
        <Label htmlFor="name">Todo</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Todo"
          onChange={onHandleChange}
        />
      </FormGroup>
      <Button className="btn-add-todo btn-block" color="success" type="submit">
        CREATE TODO
      </Button>
    </Form>
  );
};

export default AddTodoForm;
