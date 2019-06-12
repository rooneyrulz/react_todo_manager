import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SignupForm = ({ toggle }) => {
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
    console.log(formData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input id="username" name="username" type="text" onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" onChange={onChange} />
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
      <FormGroup>
        <Label htmlFor="cPassword">Confirm Password</Label>
        <Input
          id="cPassword"
          name="cPassword"
          type="password"
          onChange={onChange}
        />
      </FormGroup>
      <Button color="dark" type="submit" onClick={toggle}>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupForm;
