import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import AppHeader from "./layouts/header/AppHeader";
import RoutingComponents from "./components/routing/routes";
import AppFooter from "./layouts/footer/AppFooter";
import "./App.css";

// Redux
import store from "./store";
import { loadUser } from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <header className="mb-5">
            <AppHeader />
          </header>
          <main className="App">
            <Switch>
              <Route component={RoutingComponents} />
            </Switch>
          </main>
          <footer className="footer mt-5">
            <AppFooter />
          </footer>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
