import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";

import Spinner from "../../components/spinner/Spinner";
import Todo from "../../components/todo/Todo";

import { getUserTodos } from "../../actions/todoActions";

const Store = ({ auth, todo: { userItems, loading }, getUserTodos }) => {
  useEffect(() => {
    getUserTodos();
  }, []);

  const appendContent = loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {userItems.map(item => (
        <Todo todo={item} key={item._id} isStoreItem={true} />
      ))}
    </Fragment>
  );

  return (
    <div>
      <h1>Store</h1>
      <hr />
      <Row>{appendContent}</Row>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getUserTodos }
)(Store);
