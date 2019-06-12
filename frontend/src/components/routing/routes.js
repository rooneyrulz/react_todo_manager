import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Alert } from "reactstrap";

import Todos from "../../pages/todos/Todos";
import Home from "../../pages/home/Home";

const routes = ({ error }) => {
  const appendAlert = error.msg !== null && (
    <Alert color="danger">{error.msg}</Alert>
  );
  return (
    <Container>
      <Fragment>
        {appendAlert}
        <Switch>
          <Redirect exact from="/" to="/todos" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/todos" component={Todos} />
        </Switch>
      </Fragment>
    </Container>
  );
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  null
)(routes);
