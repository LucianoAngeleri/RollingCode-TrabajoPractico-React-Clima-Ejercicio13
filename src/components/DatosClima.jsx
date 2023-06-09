import { ListGroup, Container } from "react-bootstrap";
import { useState } from "react";

const DatosClima = ({ubicacion}) => {
  const [mostrarResultados, setMostrarResultados] = useState(true);

  const componenteRenderizado = mostrarResultados ? (
    <Container className="my-5">
      <h2 className="display-2">Resultados del clima en {ubicacion}</h2>
      <ListGroup className="fs-3 p-5">
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Temperatura:</strong> {}
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Presión:</strong> {}
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Humedad:</strong> {}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  ) : (
    <Container className="my-5">
      <h2 className="display-2 text-bg-danger p-5 rounded-5">No se encontraron resultados...</h2>{" "}
    </Container>
  );
  return componenteRenderizado;
};

export default DatosClima;
