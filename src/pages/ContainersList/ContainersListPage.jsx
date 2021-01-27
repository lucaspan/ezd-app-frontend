import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import ContainerCard from "../../components/ContainerCard/ContainerCard";

import { getMyContainers } from "../../apis/container";

import "./ContainersListPage.scss";

const ContainersListPage = () => {
  const [containers, setContainers] = useState([]);

  useEffect(async () => {
    const myContainers = await getMyContainers();
    setContainers(myContainers);
  }, []);

  const containerCards = containers.map((container) => {
    return (
      <Col
        key={container.name}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        style={{ paddingTop: "10px" }}
      >
        <ContainerCard container={container} />
      </Col>
    );
  });

  return (
    <div className="homeContainer">
      <NavBar />
      <Row>{containerCards}</Row>
    </div>
  );
};

export default ContainersListPage;
