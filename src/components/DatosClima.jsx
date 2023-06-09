import { ListGroup, Container } from "react-bootstrap";

const DatosClima = ({clima, mostrarResultados}) => {

  const componenteRenderizado = mostrarResultados ? (
    <Container className="my-5">
      <h2 className="display-2">Resultados del clima en {clima.name}</h2>
      <ListGroup className="fs-3 p-5">
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Temperatura:</strong> {clima.main.temp} °C
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Temperatura Máxima:</strong> {clima.main.temp_max} °C
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Temperatura Mínima:</strong> {clima.main.temp_min} °C
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Sensación Térmica:</strong> {clima.main.feels_like} °C
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Presión:</strong> {clima.main.pressure} hPa
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Humedad:</strong> {clima.main.humidity} %
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Velocidad del Viento:</strong> {clima.wind.speed} m/s
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Dirección del Viento:</strong> {clima.wind.deg} grados
        </ListGroup.Item>
        <ListGroup.Item className="py-3 text-bg-success">
          <strong>Descripcion:</strong> {clima.weather[0].description}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  ) : (
    <Container className="my-5">
      <h2 className="display-2 text-bg-danger p-5 rounded-5">No se encontraron resultados...</h2>
    </Container>
  );
  return componenteRenderizado;
};

export default DatosClima;
