import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import DarkModeToggle from "../DarkModeToggle";

import { Link } from "react-router-dom";

export default function Header({ title = "Vacina Covid", routes = [] }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {routes
            .filter(({ visible = true }) => visible)
            .map(({ name, path }) => (
              <Nav.Link as={Link} key={path} to={path}>
                {name}
              </Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
      <DarkModeToggle />
    </Navbar>
  );
}
