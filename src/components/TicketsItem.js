import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { counterActions, counterName } from "../store/counter-store";

const TicketsItem = (props) => {
  const { band, city, placeName, dataConcert, codeRep, price, quantity } =
    props;
  const dispatch = useDispatch();

  const ticket = { ...props };

  const addToCartHandler = () => {
    dispatch({ type: counterActions.INCREMENT });

    if (parseInt(sessionStorage.getItem(counterName.COUNT)) === 0) {
      sessionStorage.setItem(counterName.CART, JSON.stringify(props));
    } else {
      const search = JSON.parse(
        "[" + sessionStorage.getItem(counterName.CART) + "]"
      );
      const index = search.findIndex((i) => {
        return i.codeRep === ticket.codeRep;
      });

      if (index !== -1) {
        sessionStorage.setItem(
          counterName.CART,
          JSON.stringify(search).replace("[", "").replace("]", "")
        );
      } else {
        const storageCart = [
          sessionStorage.getItem(counterName.CART),
          JSON.stringify(props),
        ];
        sessionStorage.setItem(counterName.CART, storageCart);
      }
    }

    const prev = parseInt(sessionStorage.getItem(counterName.COUNT)) + 1;
    sessionStorage.setItem(counterName.COUNT, prev);
    dispatch({ type: counterActions.UPDATE });
  };

  return (
    <Card className="container-card text-center">
      <Card.Body>
        <Card.Title>{band}</Card.Title>
        <Card.Text className="card-text">
          {city}, {placeName}
        </Card.Text>
        <Card.Text>
          Ore: {dataConcert}
          <br></br>
          Prezzo: {price}$
        </Card.Text>
        <Card.Footer className="text-muted">{codeRep}</Card.Footer>
      </Card.Body>

      <button
        className="rimuovi-cart"
        onClick={() => {
          addToCartHandler();
        }}
      >
        Aggiungi al carrello
      </button>
    </Card>
  );
};

export default TicketsItem;
