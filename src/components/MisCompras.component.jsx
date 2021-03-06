import { useContext } from "react";
import { contextProduct } from "../context/ProductContext";
import { Row, Card, Button, Col } from "react-bootstrap";
import ModalPayProduct from "./ModalPayProduct";

const MisComprasComponent = () => {
  const {
    cartProducts,
    handleIncrementProduct,
    handleDecrementProduct,
    total,
  } = useContext(contextProduct);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          {total > 0 ? (
            <h1 className="p-5">Total a pagar: $ {total}</h1>
          ) : (
            <h3 className="p-5">
              Los productos que agregues al carrito aparecerán aquí.
            </h3>
          )}
        </div>

        <ModalPayProduct />
      </div>

      <Row xs={1} md={2} lg={4}>
        {cartProducts.map(
          (product) =>
            product.agregado &&
            product.cantidad > 0 && (
              <Col key={product.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.imgur.com/nwDRFEe.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>$ {product.precio}</Card.Text>
                    <Card.Text>Cantidad: {product.cantidad}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="success"
                      onClick={() => handleIncrementProduct(product)}
                    >
                      + 1
                    </Button>
                    <Button
                      variant="danger"
                      className="m-3"
                      onClick={() => handleDecrementProduct(product)}
                    >
                      - 1
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
        )}
      </Row>
    </div>
  );
};

export default MisComprasComponent;
