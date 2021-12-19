import { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { contextProduct } from "../context/ProductContext";

const ModalAddProduct = () => {
  const { handleAddProduct, setNameProduct, setPriceProduct } =
    useContext(contextProduct);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChangeNameProduct = (e) => {
    setNameProduct(e.target.value);
  };

  const handleInputChangePriceProduct = (e) => {
    setPriceProduct(e.target.value);
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Crear Producto
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{
            background: "#212529",
            color: "#ffffff",
          }}
        >
          <Modal.Title>Creación de producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="email"
                placeholder="AutoMóvil"
                name="nombre"
                onChange={handleInputChangeNameProduct}
              />
              <Form.Text className="text-muted">
                Este nombre se mostrará en la app
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio del producto</Form.Label>
              <Form.Control
                type="number"
                placeholder="0.000"
                name="precio"
                onChange={handleInputChangePriceProduct}
              />
            </Form.Group>
            <Button
              style={{ width: "100%", fontWeight: "bold" }}
              variant="warning"
              type="submit"
              onClick={handleAddProduct}
            >
              Crear
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAddProduct;
