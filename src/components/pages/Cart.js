import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter-store";

const Cart = () => {
  const dispatch = useDispatch();

  dispatch({ type: counterActions.UPDATE });
  return (
    <>
      <Card className="container-card text-center">
        <Card.Body>
          <Card.Title>Nome della band</Card.Title>
          <Card.Text className="card-text">Città, luogo </Card.Text>
          <Card.Text>Data, ora </Card.Text>
          <Card.Footer className="text-muted">Codice replica</Card.Footer>
        </Card.Body>

        <button className="rimuovi-cart">Quantità || Rimuovi</button>
      </Card>
    </>
  );
};

export default Cart;
