import React from "react";
import { Form } from "react-bootstrap";

export default function index() {
  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="name" placeholder="Nome" />
        </Form.Group>
      </Form>
    </div>
  );
}
