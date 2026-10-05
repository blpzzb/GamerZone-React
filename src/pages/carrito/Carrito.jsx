import { Link } from 'react-router-dom'
import './Carrito.css'
import Navbar from '../../components/Navbar.jsx'

function Carrito({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarDelCarrito,
}) {
  const total = carrito.reduce(
    (suma, producto) =>
      suma + producto.precio * producto.cantidad,
    0
  )

  return (
    <>
      <Navbar />

      <main className="pagina-carrito">
        <div className="container">

          <div className="text-center mb-5">
            <p className="texto-pequeno">
              GAMERZONE
            </p>

            <h1 className="fw-bold">
              Carrito de compras
            </h1>

            <p className="texto-gris">
              Revisa los productos que agregaste antes de continuar.
            </p>
          </div>

          {carrito.length === 0 ? (
            <div className="carrito-vacio text-center">

              <h4>
                Tu carrito está vacío
              </h4>

              <p className="texto-gris">
                Agrega productos desde nuestra tienda.
              </p>

              <Link
                to="/productos"
                className="btn boton-gamer mt-2"
              >
                Ver productos
              </Link>

            </div>
          ) : (
            <>
              <div className="lista-carrito">

                {carrito.map((producto) => (
                  <div
                    className="producto-carrito"
                    key={producto.id}
                  >

                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                    />

                    <div className="info-carrito">

                      <h5>
                        {producto.nombre}
                      </h5>

                      <p className="texto-gris">
                        {producto.categoria}
                      </p>

                      <div className="cantidad-carrito">

                        <button
                          className="btn btn-outline-light btn-sm"
                          onClick={() =>
                            disminuirCantidad(producto.id)
                          }
                        >
                          -
                        </button>

                        <span>
                          {producto.cantidad}
                        </span>

                        <button
                          className="btn btn-outline-light btn-sm"
                          onClick={() =>
                            aumentarCantidad(producto.id)
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>

                    <div className="acciones-carrito">

                      <h5 className="precio-carrito">
                        $
                        {(
                          producto.precio * producto.cantidad
                        ).toLocaleString('es-CL')}
                      </h5>

                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>
                          eliminarDelCarrito(producto.id)
                        }
                      >
                        Eliminar
                      </button>

                    </div>

                  </div>
                ))}

              </div>

              <div className="total-carrito mt-4">

                <h4>
                  Total:
                </h4>

                <h4>
                  ${total.toLocaleString('es-CL')}
                </h4>

              </div>

              <div className="text-end mt-4">
                <Link
                  to="/checkout"
                  className="btn boton-gamer"
                >
                  Continuar compra
                </Link>
              </div>

            </>
          )}

        </div>
      </main>
    </>
  )
}

export default Carrito