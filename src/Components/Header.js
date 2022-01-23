import React from 'react';
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap';

function Header() {
  return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="/contact">
        Contact Us
      </Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
  )
}

export default Header;
