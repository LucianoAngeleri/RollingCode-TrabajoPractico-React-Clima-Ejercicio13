import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import Encabezado from "./components/Encabezado";
import Footer from "./components/Footer";
import BuscadorPais from "./components/BuscadorPais";

function App() {
  return (
    <>
    <Encabezado></Encabezado>
    <BuscadorPais></BuscadorPais>
    <Footer></Footer>
    </>
  )
}

export default App
