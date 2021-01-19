import React from "react";
import { useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <NavBar />
    </div>
  );
};

export default HomePage;
