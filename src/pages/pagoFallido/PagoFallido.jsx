import { Link } from 'react-router-dom'
import './PagoFallido.css'
import Navbar from '../../components/Navbar.jsx'

function PagoFallido() {
  return (
    <>
      <Navbar />

      <main className="pagina-pago">
        <div className="container">

          <div className="resultado-pago text-center">

            <div className="icono-error">
              ✕
            </div>

            <h1 className="mb-3">
              No se pudo realizar el pago
            </h1>

            <p className="texto-gris">
              Ocurrió un problema al procesar tu compra.
            </p>

            <p className="texto-gris">
              Puedes volver al checkout e intentarlo nuevamente.
            </p>

            <Link
              to="/checkout"
              className="btn boton-gamer mt-3"
            >
              Volver al checkout
            </Link>

          </div>

        </div>
      </main>
    </>
  )
}

export default PagoFallido