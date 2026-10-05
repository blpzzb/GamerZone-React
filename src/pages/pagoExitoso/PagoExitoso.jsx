import { Link } from 'react-router-dom'
import './PagoExitoso.css'
import Navbar from '../../components/Navbar.jsx'

function PagoExitoso() {
  return (
    <>
      <Navbar />

      <main className="pagina-pago">
        <div className="container">

          <div className="resultado-pago text-center">

            <div className="icono-exito">
              ✓
            </div>

            <h1 className="mb-3">
              Compra realizada con éxito
            </h1>

            <p className="texto-gris">
              Tu pedido fue procesado correctamente.
            </p>

            <p className="texto-gris">
              Gracias por comprar en GamerZone.
            </p>

            <Link
              to="/productos"
              className="btn boton-gamer mt-3"
            >
              Volver a productos
            </Link>

          </div>

        </div>
      </main>
    </>
  )
}

export default PagoExitoso