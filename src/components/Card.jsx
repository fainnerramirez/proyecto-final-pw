import { Row, Col, Card, Button } from "react-bootstrap";

const CardC = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src="https://i.imgur.com/nwDRFEe.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" className="">
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
