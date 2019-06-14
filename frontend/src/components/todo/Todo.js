import React, { Fragment } from "react";
import {
  Col,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText
} from "reactstrap";

import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <Fragment>
      <Col sm="12" md="6" lg="4" className="mb-4">
        <Card className="card-todo">
          <CardBody>
            <CardTitle className="text-light">{todo.name}</CardTitle>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Todo;
