import { useState } from "react";
import { Button, Modal, Badge } from "react-bootstrap";

const ModalDetailProduct = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Ver detalles
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{
            background: "#212529",
            color: "#ffffff",
          }}
        >
          <Modal.Title>{product.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <Badge bg="success">Precio</Badge> <h3>$ {product.precio}</h3>
          </p>
          <p>
            <Badge bg="primary">Cantidad Agregada</Badge>
            <h3>{product.cantidad}</h3>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDetailProduct;
