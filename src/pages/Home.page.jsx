import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CardC from "../components/Card";

function HomePage() {
  return (
    <Container>
      <Navbar />
      <Filter />
      <CardC />
    </Container>
  );
}

export default HomePage;
