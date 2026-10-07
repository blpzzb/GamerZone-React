import { useNavigate, useParams } from 'react-router-dom'
import './DetalleProducto.css'
import Navbar from '../../components/Navbar.jsx'

function DetalleProducto({ productos, agregarAlCarrito }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const producto = productos.find(
    (producto) => producto.id === Number(id)
  )

  if (!producto) {
    return (
      <>
        <Navbar />

        <main className="pagina-detalle">
          <div className="container text-center">
            <h2>Producto no encontrado</h2>

            <button
              className="btn boton-gamer mt-3"
              onClick={() => navigate('/productos')}
            >
              Volver a productos
            </button>
          </div>
        </main>
      </>
    )
  }

  function agregarProducto() {
    agregarAlCarrito(producto)
    navigate('/carrito')
  }

  return (
    <>
      <Navbar />

      <main className="pagina-detalle">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6 mb-4 mb-lg-0">

              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="img-fluid detalle-imagen"
              />

            </div>


            <div className="col-lg-6">

              <p className="texto-pequeno">
                {producto.categoria}
              </p>

              <h1 className="fw-bold mb-3">
                {producto.nombre}
              </h1>

              <p className="texto-gris">
                {producto.descripcion}
              </p>

              <h2 className="precio mb-4">
                ${producto.precio.toLocaleString('es-CL')}
              </h2>

              <button
                className="btn boton-gamer"
                onClick={agregarProducto}
              >
                Agregar al carrito
              </button>

            </div>

          </div>

        </div>
      </main>
    </>
  )
}

export default DetalleProducto