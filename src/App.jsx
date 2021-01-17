import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import TodoContainer from "./pages/TodoContainer";
import SignInPage from "./pages/SignIn/SignInPage";

import { Store } from "./store/Store";

const App = () => {
  const { state } = useContext(Store);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={SignInPage} />

        {!state.user && <Redirect to="/signin" />}

        <Route path="/" exact component={TodoContainer} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
