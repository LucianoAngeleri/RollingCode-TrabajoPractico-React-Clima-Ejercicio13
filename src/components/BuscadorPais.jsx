import { Container, Form, Button } from 'react-bootstrap';
import DatosClima from './DatosClima';
import { useState, useEffect } from "react";

const BuscadorPais = () => {
    const [ciudad, setCiudad] = useState("");
    const [ubicacion, setUbicacion] = useState({});
    const [clima, setClima] = useState({});

    const [mostrarResultados, setMostrarResultados] = useState(false);

    const APIkey = "ecdbf1dacca03202974b7c373eb3d17e";

    const obtenerDatosUbicacionAPI = async () => {
        let urlUbicacion = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=1&appid=${APIkey}&lang=es`;
        try {
            const ubicacionRespuesta = await fetch(urlUbicacion);
            const datosUbicacion = await ubicacionRespuesta.json();
            console.log(datosUbicacion)
            setUbicacion(datosUbicacion[0]);
        } catch (error) {
            console.log(error);
        }
    };
    const obtenerDatosClimaAPI = async (ubicacion) => {
        let urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${ubicacion.lat}&lon=${ubicacion.lon}&appid=${APIkey}&units=metric&lang=es`;
        try {
            const climaRespuesta = await fetch(urlClima);
            const datosClima = await climaRespuesta.json();
            console.log(datosClima)
            setClima(datosClima);
            setMostrarResultados(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (ubicacion.lat && ubicacion.lon) {
            obtenerDatosClimaAPI(ubicacion);
        }
    }, [ubicacion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        obtenerDatosUbicacionAPI(ciudad);
        setMostrarResultados(false);
    }
    const handleChange = (e) => {
        const ciudad = e.target.value;
        setCiudad(ciudad);
        setMostrarResultados(false);
    }

    return (
        <>
            <Container className="rounded-5 border-1 bg-success-subtle p-5 fs-2 my-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="buscadorUbicacion">
                        <Form.Label>Buscar el clima por Ciudad</Form.Label>
                        <div className='d-flex gap-3'>
                            <Form.Control type="text" value={ciudad} placeholder="Ingrese la ciudad para consultar el clima..." onChange={handleChange} />
                            <Button variant="outline-success" className="rounded-4">Buscar</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Container>
            <DatosClima clima={clima} mostrarResultados={mostrarResultados}/>
        </>

    );
};

export default BuscadorPais;