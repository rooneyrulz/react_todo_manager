import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const LoginForm = ({ toggle }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input id="username" name="username" type="text" onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={onChange}
        />
      </FormGroup>
      <Button color="dark" type="submit" onClick={toggle}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
