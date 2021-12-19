import { useState } from "react";
import { InputGroup, FormControl, Container } from "react-bootstrap";

const Filter = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <Container>
      <div>
        <h1 style={{ textAlign: "center" }}>Filtro</h1>
      </div>
      <br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Buscar</InputGroup.Text>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </InputGroup>
      <div style={{ padding: "20px" }}>
        <br />
        <h1 style={{ textTransform: "capitalize" }}>{filterValue}</h1>
        <br />
        <br />
      </div>
    </Container>
  );
};

export default Filter;
