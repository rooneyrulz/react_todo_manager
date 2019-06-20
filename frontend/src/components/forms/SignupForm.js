import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

const SignupForm = ({ registerUser, error, isAuthenticated, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cPassword: ""
  });

  const { name, username, email, password, cPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const payload = {
      name,
      username,
      email,
      password,
      cPassword
    };
    registerUser(payload);
  };

  if (isAuthenticated) history.push("/dashboard");

  return (
    <Form onSubmit={e => onSubmit(e)}>
      {error !== null && <Alert color="danger">{error}</Alert>}
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={onChange}
        />
      </FormGroup>
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
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
        />
        <small className="form-text text-muted">
          We never share your email with anyone!
        </small>
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
      <FormGroup>
        <Label htmlFor="cPassword">Confirm Password</Label>
        <Input
          id="cPassword"
          name="cPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={onChange}
        />
      </FormGroup>
      <Button color="primary" className="btn-signup btn-block" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupForm;
