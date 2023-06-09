import {Container} from 'react-bootstrap';

const Encabezado = () => {
    return (
        <Container fluid className="py-5 text-bg-success">
            <h1 className="display-1 text-center">Consulta el clima en tu ciudad</h1>
        </Container>
    );
};

export default Encabezado;