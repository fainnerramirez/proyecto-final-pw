import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import CardC from "./components/Card";

function App() {
  return (
    <Container>
      <Navbar />
      <Filter />
      <CardC />
    </Container>
  );
}

export default App;
