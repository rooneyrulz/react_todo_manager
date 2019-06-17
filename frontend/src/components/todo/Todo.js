import React, { Fragment } from "react";
import {
  Col,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

import "./Todo.css";

const Todo = ({ todo, isStoreItem }) => {
  return (
    <Fragment>
      <Col sm="12" md="6" lg="4" className="mb-4">
        <Card className="card-todo">
          <CardBody>
            <CardTitle className="text-light">{todo.name}</CardTitle>
          </CardBody>
          { isStoreItem ? (
            <CardFooter>
              <Button type="button" color="danger">REMOVE</Button>
            </CardFooter>
          ) : null }
        </Card>
      </Col>
    </Fragment>
  );
};

export default Todo;
