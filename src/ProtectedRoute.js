import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "aws-amplify";

function ProtectedRoute({ component: Component, ...rest }) {
  const [isAuthenticated, setLoggedIn] = useState(true);
  useEffect(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch {
      setLoggedIn(false);
    }
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;
