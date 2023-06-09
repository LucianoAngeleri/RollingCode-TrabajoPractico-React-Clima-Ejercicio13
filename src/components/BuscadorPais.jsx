import { Container, Form, Button } from 'react-bootstrap';
import DatosClima from './DatosClima';
import { useState } from "react";

const BuscadorPais = () => {
    const [ubicacion, setUbicacion] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
    }
    const handleChange = (e) =>{
      const ubicacion = e.target.value;
      setUbicacion(ubicacion)
    }
  
    return (
        <>
        <Container className="rounded-5 border-1 bg-success-subtle p-5 fs-2 my-5">
           <Form>
                <Form.Group className="mb-3" controlId="buscadorUbicacion">
                    <Form.Label>Buscar el clima por Pais</Form.Label>
                <div className='d-flex gap-3'>
                    <Form.Control type="text" value={ubicacion} placeholder="Ingrese la ubicación para consultar el clima..." onChange={handleChange}/>
                    <Button variant="outline-success" className="rounded-4" onSubmit={handleSubmit}>Buscar</Button>
                </div>
                </Form.Group>
            </Form>
        </Container>
        <DatosClima ubicacion={ubicacion}></DatosClima>
        </>

    );
};

export default BuscadorPais;