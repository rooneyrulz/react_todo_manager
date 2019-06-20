import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

// Components
import Todos from "../../pages/todos/Todos";
import Home from "../../pages/home/Home";
import Dashboard from "../../pages/dashboard/Dashboard";
import Store from "../../pages/store/Store";
import About from "../../pages/about/About";

// Private Route
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
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

export default Routes;
