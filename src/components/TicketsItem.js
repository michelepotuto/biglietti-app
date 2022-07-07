import React from "react";
import { Card } from "react-bootstrap";

const TicketsItem = (props) => {
  const { band, city, placeName, dataConcert, codeRep } = props;

  return (

    <Card className="container-card text-center">
      <Card.Body>
        <Card.Title>{band}</Card.Title>
        <Card.Text className="card-text">
          {city}, {placeName}{" "}
        </Card.Text>
        <Card.Text>{dataConcert}, ore 20:00 </Card.Text>
        <Card.Footer className="text-muted">{codeRep}</Card.Footer>
      </Card.Body>

      <button className="rimuovi-cart">Aggiungi al carrello</button>
    </Card>
  );
};

export default TicketsItem;
