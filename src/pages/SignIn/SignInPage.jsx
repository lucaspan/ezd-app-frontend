import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { Formik } from "formik";

import "./SignInPage.scss";

const SignInPage = () => {
  const history = useHistory();

  return (
    <div className="signInContainer">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, actions) => {
          const { email, password } = values;

          await Auth.signIn(email, password)
            .then(() => history.push("/"))
            .catch((err) => console.log(err));

          actions.setSubmitting(false);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit">
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInPage;
