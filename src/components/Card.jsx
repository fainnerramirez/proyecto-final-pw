import { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { contextProduct } from "../context/ProductContext";
import { Toaster } from "react-hot-toast";

const CardC = () => {
  const { cartProducts, handleIncrementProduct, filterValue } =
    useContext(contextProduct);

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {cartProducts
        .filter((product) => product.nombre.includes(filterValue))
        .map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/nwDRFEe.jpg" />
              <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>$ {product.precio}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  disabled={
                    product.agregado && product.cantidad > 0 ? "disabled" : null
                  }
                  onClick={() => handleIncrementProduct(product)}
                >
                  Agregar
                  <Toaster />
                </Button>
                <Button variant="primary" className="m-3">
                  Ver detalles
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default CardC;
