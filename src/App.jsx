import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import HomePage from "./pages/Home/HomePage";
import TodoContainer from "./pages/TodoContainer";
import SignInPage from "./pages/SignIn/SignInPage";
import ContainersListPage from "./pages/ContainersList/ContainersListPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/" exact component={HomePage} />
        <ProtectedRoute
          path="/containers"
          exact
          component={ContainersListPage}
        />
        <ProtectedRoute path="/todo" exact component={TodoContainer} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
