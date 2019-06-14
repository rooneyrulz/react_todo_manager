import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Alert } from "reactstrap";

import Todos from "../../pages/todos/Todos";
import Home from "../../pages/home/Home";
import Dashboard from "../../pages/dashboard/Dashboard";
import Store from "../../pages/store/Store";
import About from "../../pages/about/About";

import PrivateRoute from "../routing/PrivateRoute";

const Routes = ({ error }) => {
  const appendAlert = error.msg !== null && (
    <Alert color="danger">{error.msg}</Alert>
  );
  return (
    <Container>
      <Fragment>
        <Switch>
          <Redirect exact from="/" to="/todos" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/about" component={About} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/store" component={Store} />
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
)(Routes);
