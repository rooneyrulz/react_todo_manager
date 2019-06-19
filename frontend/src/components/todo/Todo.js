import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Col, Card, CardBody, CardFooter, CardTitle, Button } from "reactstrap";

import "./Todo.css";

import { deleteTodo } from "../../actions/todoActions";

const Todo = ({ item, isStoreItem, deleteTodo }) => {
  const onDelete = id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodo(id);
    }
  };

  return (
    <Fragment>
      <Col sm="12" md="6" lg="4" className="mb-4">
        <Card className="card-todo">
          <CardBody>
            <CardTitle className="text-light">{item.name}</CardTitle>
          </CardBody>
          {isStoreItem ? (
            <CardFooter>
              <Button
                type="button"
                color="danger"
                className="btn-block"
                onClick={() => onDelete(item._id)}
              >
                Remove
              </Button>
            </CardFooter>
          ) : null}
        </Card>
      </Col>
    </Fragment>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { deleteTodo }
)(Todo);
