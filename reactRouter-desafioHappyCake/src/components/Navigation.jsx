import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import imgHome from "../assets/home.png";
import imgContacto from "../assets/contacto.png";
import imgHappyCake from "../assets/iconoHappyCake.png";

function Navigation() {
  return (
    <Navbar bg="danger" variant="dark">
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="mx-3">
              <div className="d-flex align-items-center">
                <img
                  src={imgHome}
                  alt="Icono Home"
                  style={{ width: "22px", marginRight: "5px" }}
                />
                Home
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              <div className="d-flex align-items-center">
                <img
                  src={imgContacto}
                  alt="Icono Contacto"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                Contacto
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="mx-5">
          <div className="d-flex align-items-center">
            Happy Cake
            <img
              src={imgHappyCake}
              alt="Icono Contacto"
              style={{ width: "30px", marginLeft: "15px" }}
            />
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
