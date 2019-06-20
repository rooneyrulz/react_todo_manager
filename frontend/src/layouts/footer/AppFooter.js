import React from "react";
import { Container } from "reactstrap";

const AppFooter = () => {
  return (
    <Container>
      <hr/>
      <p className="lead text-muted text-center">
        Todo Manager &copy; by rulz@programmers.com in 2k19
      </p>
    </Container>
  );
};

export default AppFooter;
