import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Alert } from "reactstrap";

// Components
import Spinner from "../../components/spinner/Spinner";
import Todo from "../../components/todo/Todo";

// Redux
import { getUserTodos } from "../../actions/todoActions";

const Store = ({ todo: { userItems, loading }, getUserTodos }) => {
  useEffect(() => {
    getUserTodos();
  }, []);

  const appendContent = loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {userItems.map(item => (
        <Todo item={item} key={item._id} isStoreItem={true} />
      ))}
    </Fragment>
  );

  return (
    <div>
      <h1 className="display-4">Store</h1>
      <hr />
      {userItems.length < 1 ? (
        <Alert color="danger">It seems you have not added any todos yet!</Alert>
      ) : null}
      <Row>{appendContent}</Row>
    </div>
  );
};

Store.propTypes = {
  todo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getUserTodos }
)(Store);
