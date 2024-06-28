import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contacto = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-black">Cuéntanos, ¿en que te podemos ayudar?</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-black mt-4">Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="ControlTextarea1">
              <Form.Label className="text-black mt-4">Descripción</Form.Label>
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="danger" type="submit" className="mt-4" style={{width:"100%"}}>
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
