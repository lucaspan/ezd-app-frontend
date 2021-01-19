import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import HomePage from "./pages/Home/HomePage";
import TodoContainer from "./pages/TodoContainer";
import SignInPage from "./pages/SignIn/SignInPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={SignInPage} />
        <ProtectedRoute path="/" exact component={HomePage} />
        <ProtectedRoute path="/todo" exact component={TodoContainer} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
