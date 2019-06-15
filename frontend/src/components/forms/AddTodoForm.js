import React from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddTodoForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="name">Todo</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Todo"
        />
      </FormGroup>
      <Button className="btn-add-todo btn-block" color="success" type="submit">
        CREATE TODO
      </Button>
    </Form>
  );
}

export default AddTodoForm;
