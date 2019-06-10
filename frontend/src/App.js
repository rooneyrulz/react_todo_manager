import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppHeader from './layouts/header/AppHeader';
import Todos from './pages/todos/Todos';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <header>
          <AppHeader />
        </header>
        <main className="App">
          <Switch>
            <Redirect exact from="/" to="/todos" />
            <Route exact path="/home" component={null} />
            <Route exact path="/todos" component={Todos} />
          </Switch>
        </main>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
