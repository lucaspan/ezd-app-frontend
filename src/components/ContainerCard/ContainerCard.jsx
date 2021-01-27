import React from "react";
import { Card, Badge, ListGroup, Form, Col, Row } from "react-bootstrap";

import "./ContainerCard.scss";

const ContainerCard = (props) => {
  const statusToBadgeVariantMapping = {
    RUNNING: "success",
    STOPPED: "secondary",
    ERROR: "danger"
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.container.name}</Card.Title>
        <Card.Subtitle>
          <Badge variant={statusToBadgeVariantMapping[props.container.status]}>
            {props.container.status}
          </Badge>{" "}
        </Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col sm="6">IP</Col>
              <Col sm="6">{props.container.ip}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col sm="6">Memory</Col>
              <Col sm="6">{props.container.memory}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col sm="6">CPU</Col>
              <Col sm="6">{props.container.cpu}</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Running</small>
      </Card.Footer>
    </Card>
  );
};

export default ContainerCard;
