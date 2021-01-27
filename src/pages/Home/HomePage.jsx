import React from "react";
import NavBar from "../../components/NavBar/NavBar";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <NavBar />
      <div>Welcome</div>
    </div>
  );
};

export default HomePage;
