import React from 'react'
import { Nav } from 'react-bootstrap'


const Navbar = () => {
  return (
    <div>


        <>
      <div className='container1'> 
  <Nav className="justify-content-flex-start" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Instagram</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Facebook</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Twitter</Nav.Link>
    </Nav.Item>
  </Nav>
  <div className="title h4">PRENOTA IL TUO CONCERTO DOVE E COME VUOI</div>
  <Nav className="justify-content-end" activeKey="/home">
  <Nav.Item>
      <Nav.Link href="/home"  >Logout</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="nav-cart"href="/home">CARRELLO</Nav.Link>
    </Nav.Item>
  </Nav>
  </div> 
</>

    </div>
  )
}

export default Navbar