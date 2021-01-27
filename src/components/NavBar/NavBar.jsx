import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";

import "./NavBar.scss";

const NavBar = () => {
  const [username, setUsername] = useState(null);

  useEffect(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      if (user) {
        setUsername(user.username);
      } else {
        setUsername(null);
      }
    } catch {
      setUsername(null);
    }
  }, [username]);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">EZD</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="/containers" hidden={username ? false : true}>
            My Containers
          </Nav.Link>
          <Nav.Link href="/">About Us</Nav.Link>
        </Nav>
        {username ? (
          <>
            <Navbar.Text style={{ marginRight: "0.8rem" }}>
              {username}
            </Navbar.Text>
            <Button
              href="/"
              variant="dark"
              size="sm"
              onClick={async () => {
                await Auth.signOut();
              }}
            >
              Log Out
            </Button>{" "}
          </>
        ) : (
          <Button href="/signin" variant="dark" size="sm">
            Log In
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
