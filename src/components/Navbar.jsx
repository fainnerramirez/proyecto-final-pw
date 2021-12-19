import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RUTA } from "../routes/rutasApp";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>App</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={RUTA.HOME}>
              <div
                style={{
                  textDecoration: "none",
                  color: "#eeeeee",
                  padding: "6px",
                }}
              >
                Inicio
              </div>
            </Link>
            <Link to={RUTA.MIS_COMPRAS}>
              <div
                style={{
                  textDecorationLine: "none",
                  color: "#eeeeee",
                  padding: "6px",
                }}
              >
                Mis compras
              </div>
            </Link>
            <Nav.Link href="#pricing">Créditos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavbarComponent;
