import { useContext } from "react";
import { InputGroup, FormControl, Container } from "react-bootstrap";
import { contextProduct } from "../context/ProductContext";

const Filter = () => {
  const { filterValue, setFilterValue } = useContext(contextProduct);

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

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
          onChange={(e) => handleInputChange(e)}
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
