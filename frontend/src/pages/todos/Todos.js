import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Alert } from "reactstrap";

// Components
import Spinner from "../../components/spinner/Spinner";
import Todo from "../../components/todo/Todo";
import AddTodo from "../../components/addTodo/AddTodo";

// Redux
import { getTodos } from "../../actions/todoActions";

const Todos = ({ todo: { items, loading }, isAuthenticated, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, []);

  const appendContent = loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {items.map(item => (
        <Todo item={item} key={item._id} />
      ))}
    </Fragment>
  );

  return (
    <section id="todos">
      <div className="todo-header">
        <h1 className="display-4">Todos</h1>
        <div>{isAuthenticated ? <AddTodo /> : null}</div>
      </div>
      <hr />
      {items.length < 1 ? (
        <Alert color="danger">No todos found yet!</Alert>
      ) : null}
      <Row>{appendContent}</Row>
    </section>
  );
};

Todos.propTypes = {
  todo: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  todo: state.todo,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getTodos }
)(Todos);
