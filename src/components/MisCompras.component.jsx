import { useContext } from "react";
import { contextProduct } from "../context/ProductContext";
import { Row, Card, Button, Col } from "react-bootstrap";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const MisComprasComponent = () => {
  const {
    cartProducts,
    handleIncrementProduct,
    handleDecrementProduct,
    total,
    handlePayProducts,
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

        <div className="p-5">
          <Button
            className="fw-bold fs-5"
            variant={total > 0 ? "warning" : "secondary"}
            disabled={total > 0 ? null : "disabled"}
          >
            <RiMoneyDollarCircleFill /> Pagar Cuenta
          </Button>
        </div>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {cartProducts.map(
          (product) =>
            product.agregado &&
            product.cantidad > 0 && (
              <Col key={product.id}>
                <Card style={{ width: "25rem" }}>
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
                      +
                    </Button>
                    <Button
                      variant="danger"
                      className="m-3"
                      onClick={() => handleDecrementProduct(product)}
                    >
                      -
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
