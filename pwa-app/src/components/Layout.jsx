import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet /> {/* This is where the child routes will be rendered */}
    </div>
  );
}

export default Layout;