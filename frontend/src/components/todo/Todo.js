import React, { Fragment } from "react";
import {
  Col,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText
} from "reactstrap";

const Todo = ({ todo }) => {
  return (
    <Fragment>
      <Col sm="12" md="6" lg="4" className="mb-4">
        <Card color="success">
          <CardBody>
            <CardTitle className="text-light">{todo.name}</CardTitle>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Todo;
