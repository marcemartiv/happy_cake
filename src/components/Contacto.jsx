import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function TextControlsExample() {
  return (
    <Form>
      <Container>
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form className="text-center">Correo:</Form>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form className="text-center">Descripcion:</Form>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Container>
      <div className="text-center">
        <button type="button" className="btn btn-danger">
          Enviar
        </button>
      </div>
    </Form>
  );
}

export default TextControlsExample;
