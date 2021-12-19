import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Mis Compras</Nav.Link>
            <Nav.Link href="#pricing">Créditos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavbarComponent;
