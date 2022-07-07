import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>



      <>
        <div className="container1">
          <Nav className="justify-content-flex-start" activeKey="/home">
            <Nav.Item>
              <button>
              <i class="bi bi-facebook fs-4"></i>
              </button>
            </Nav.Item>
            <Nav.Item>
            <button>
              <i class="bi bi-instagram fs-4"></i>
              </button>
            </Nav.Item>
            <Nav.Item>
            <button>
              <i class="bi bi-twitter fs-4"></i>
              </button>
            </Nav.Item>
          </Nav>
          <div className="title h3">Prentotazione Ticket TEAM A</div>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/login">
                Logout
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/cart" className="nav-cart">
                CARRELLO
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </>
    </div>
  );
};

export default Navbar;
