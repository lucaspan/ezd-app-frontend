import React, { useContext } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Store } from "../../store/Store";
import NavBar from "../../components/NavBar/NavBar";
import ContainerCard from "../../components/ContainerCard/ContainerCard";

import "./ContainersListPage.scss";

const ContainersListPage = () => {
  const { state, dispatch } = useContext(Store);

  var containerCards = state.containers.map((container) => {
    return (
      <Col
        key={container.name}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
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
