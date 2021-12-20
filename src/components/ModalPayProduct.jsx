import { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { contextProduct } from "../context/ProductContext";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const ModalPayProduct = () => {
  const { handlePayProducts, total } = useContext(contextProduct);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="fw-bold fs-5"
        variant={total > 0 ? "warning" : "secondary"}
        disabled={total > 0 ? null : "disabled"}
        onClick={handleShow}
      >
        <RiMoneyDollarCircleFill /> Pagar Cuenta
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{
            background: "#212529",
            color: "#ffffff",
          }}
        >
          <Modal.Title>Pago de factura</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {total > 0 ? (
            <h3 style={{ padding: "10px 0" }}>Total a pagar: $ {total}</h3>
          ) : (
            <h3 style={{ padding: "10px 0" }}>¡Gracias por tu compra!</h3>
          )}

          {total > 0 ? (
            <Button
              style={{ width: "100%", fontWeight: "bold" }}
              variant="warning"
              type="submit"
              onClick={handlePayProducts}
            >
              Pagar
            </Button>
          ) : (
            <Button
              style={{ width: "100%", fontWeight: "bold" }}
              variant="success"
            >
              Éxitos
            </Button>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPayProduct;
