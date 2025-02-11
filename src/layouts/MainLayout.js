import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">Finance Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/expenses">Chi tiêu</Nav.Link>
              <Nav.Link as={Link} to="/income">Thu nhập</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Thống kê</Nav.Link>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="light">
                <i className="bi bi-person-circle"></i> {user?.username || "User"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">Hồ sơ</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
