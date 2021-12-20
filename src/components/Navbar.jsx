import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RUTA } from "../routes/rutasApp";
import ModalAddProduct from "./ModalAddProduct";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>App</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to={RUTA.HOME}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  textDecoration: "none",
                  color: "#eeeeee",
                  padding: "15px",
                }}
              >
                Inicio
              </div>
            </Link>
            <Link
              to={RUTA.MIS_COMPRAS}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  textDecorationLine: "none",
                  color: "#eeeeee",
                  padding: "15px",
                }}
              >
                Mis compras
              </div>
            </Link>
            <Nav.Link>
              <ModalAddProduct />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavbarComponent;
