import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { counterName } from "../../store/counter-store";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { counterActions } from "../../store/counter-store";

const Cart = () => {
  const search = JSON.parse(
    "[" + sessionStorage.getItem(counterName.CART) + "]"
  );

  const count = useSelector((store) => store.count);
  const cart = useSelector((store) => store.cartArray);
  const total = useSelector((store) => store.total);
  const dispatch = useDispatch();

  useEffect(() => {
    //get the items after rendering the component
    dispatch({ type: counterActions.UPDATE });
  }, []);

  const emptyCart = () => {
    //remove all the item in the cart and set 0 to the count
    sessionStorage.setItem(counterName.COUNT, 0);
    sessionStorage.removeItem(counterName.CART);
    dispatch({ type: counterActions.UPDATE }); //refresh the cart
    console.log("reset cart");
  };

  return (
    <>
      {count === 0 ? (
        <div>
          <h1 className="text-center">Empty cart</h1>
          <div className="row align-items-center">
            <div className="col">
              <h2 className="text-center">
                <button className="inizia_spesa border border-1" to="/prodotti">
                  <Link to="/home">Prenota un biglietto</Link>
                </button>
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
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

                <button className="rimuovi-cart">Rimuovi</button>
              </Card>
            );
          })}

          <div className="container_emptypay">
            <p className="m-4">TOTALE: {total}€</p>
            <p type="button" className="btn btn-info m-3" onClick={emptyCart}>
              SVUOTA CARRELLO
            </p>
            <p type="button" className="btn btn-info m-3">
              PAGAMENTO
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
