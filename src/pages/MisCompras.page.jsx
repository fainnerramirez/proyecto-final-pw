import MisComprasComponent from "../components/MisCompras.component";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";

const MisComprasPage = () => {
  return (
    <Container>
      <Navbar />
      <MisComprasComponent />
    </Container>
  );
};

export default MisComprasPage;
