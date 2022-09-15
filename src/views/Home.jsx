import { Container } from "react-bootstrap";
import img from "../assents/img/pastel.jpeg";



export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">HAPPY-CAKE</span>
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <spam> <img src={img} alt="" /> </spam>
    </Container>
  );
};
