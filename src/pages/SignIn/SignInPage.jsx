import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { signInUser } from "../../actions";
import { Store } from "../../store/Store";

import "./SignInPage.scss";

const SignInPage = () => {
  const { state, dispatch } = useContext(Store);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    signInUser(
      { email: "lalala", idToken: "asdf", accessToken: 123, refreshToken: 123 },
      dispatch
    );

    // console.log(state);
  }

  return (
    <div className="signInContainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default SignInPage;
