import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { counterActions, counterName } from "../../store/counter-store";

const Cart = () => {
  const search = JSON.parse(
    "[" + sessionStorage.getItem(counterName.CART) + "]"
  );

  const dispatch = useDispatch();

  return (
    // <div className="cart-container">
    //   <br></br>
    //   <div className="title">
    //     <div className="card justify-content-center">
    //       <div className="container">Nome band</div>
    //     </div>
    //     <div className="card-body"> Città e luogo del concerto &nbsp;&nbsp;&nbsp;
    //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Data, orario e codice replica</div>
    //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    //     <button className="btn title">Rimuovi</button>
    //   </div>
    // </div>
    <>
      {search.map((p) => {
        return (
          <Card className="container-card text-center">
            <Card.Body>
              <Card.Title>{p.band}</Card.Title>
              <Card.Text className="card-text">
                {p.city}, {p.placeName}
              </Card.Text>
              <Card.Text>
                Data: {p.dataConcert}
                <br></br>
                Price: {p.price}$
              </Card.Text>
              <Card.Footer className="text-muted">{p.codeRep}</Card.Footer>
            </Card.Body>

            <button className="rimuovi-cart">Quantità || Rimuovi</button>
          </Card>
        );
      })}
    </>
  );
};

export default Cart;
