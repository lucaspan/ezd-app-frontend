import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        Containers
        <Button variant="light">
          <FontAwesomeIcon icon={faPlus} size="1x" />
        </Button>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Navbar.Text style={{ marginRight: "0.8rem" }}>
          lucas.pan@fintelics.com
        </Navbar.Text>
        <Button variant="dark" size="sm">
          Log Out
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
