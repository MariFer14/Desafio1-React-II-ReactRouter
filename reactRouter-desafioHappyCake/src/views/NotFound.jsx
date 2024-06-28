import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="mt-5 text-black">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>404</h1>
          <p>Página no encontrada</p>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;