import React from "react";
import { Card } from "react-bootstrap";

import "./ContainerCard.scss";

const ContainerCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.container.name}</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Running</small>
      </Card.Footer>
    </Card>
  );
};

export default ContainerCard;
