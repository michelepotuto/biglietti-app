import React from "react";
import { Card } from "react-bootstrap";


const Cart = () => {
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

    <Card className="container-card text-center">
      <Card.Body>
        <Card.Title>Nome della band</Card.Title>
        <Card.Text className="card-text">Città, luogo </Card.Text>
        <Card.Text>Data, ora </Card.Text>
        <Card.Footer className="text-muted">Codice replica</Card.Footer>
      </Card.Body>

      <button  className="rimuovi-cart">Quantità || Rimuovi</button>

    </Card>
  );
};

export default Cart;
