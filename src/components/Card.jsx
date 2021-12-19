import { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { contextProduct } from "../context/ProductContext";

const CardC = () => {
  const { cartProducts, handleIncrementProduct } = useContext(contextProduct);

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {cartProducts.map((product) => (
        <Col key={product.id}>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src="https://i.imgur.com/nwDRFEe.jpg" />
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>$ {product.precio}</Card.Text>
              <Card.Text>Cantidad: {product.cantidad}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                onClick={() => handleIncrementProduct(product)}
              >
                Agregar
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
