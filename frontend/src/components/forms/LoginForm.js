import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

import "./Forms.css";

const LoginForm = ({ loginUser, error }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const payload = {
      username,
      password
    };

    loginUser(payload);
  };

  return (
    <Form onSubmit={onSubmit}>
      {error !== null && <Alert color="danger">{error}</Alert>}
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
        />
      </FormGroup>
      <Button className="btn-login btn-block" type="submit">
        SIGN IN
      </Button>
    </Form>
  );
};

export default LoginForm;
