import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="danger" variant="dark">
      <Container fluid>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="mx-4">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand className="mx-5">
        Happy Cake
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Navigation