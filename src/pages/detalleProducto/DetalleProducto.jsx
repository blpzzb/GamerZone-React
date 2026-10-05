import { Link, useNavigate, useParams } from 'react-router-dom'
import './DetalleProducto.css'
import Navbar from '../../components/Navbar.jsx'
import productos from '../../data/productos.js'

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const producto = productos.find(
    (producto) => producto.id === Number(id)
  )

  function agregarProducto() {
    agregarAlCarrito(producto)
    navigate('/carrito')
  }

  if (!producto) {
    return (
      <>
        <Navbar />

        <main className="detalle-producto">
          <div className="container text-center">
            <h1>Producto no encontrado</h1>

            <Link
              to="/productos"
              className="btn boton-gamer mt-3"
            >
              Volver a productos
            </Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="detalle-producto">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={producto.imagen}
                className="img-fluid imagen-detalle"
                alt={producto.nombre}
              />
            </div>

            <div className="col-md-6">

              <p className="texto-pequeno">
                {producto.categoria}
              </p>

              <h1 className="fw-bold">
                {producto.nombre}
              </h1>

              <p className="texto-gris">
                {producto.descripcion}
              </p>

              <h3 className="precio mb-4">
                ${producto.precio.toLocaleString('es-CL')}
              </h3>

              <button
                className="btn boton-gamer me-2"
                onClick={agregarProducto}
              >
                Agregar al carrito
              </button>

              <Link
                to="/productos"
                className="btn btn-outline-light"
              >
                Volver
              </Link>

            </div>

          </div>

        </div>
      </main>
    </>
  )
}

export default DetalleProducto