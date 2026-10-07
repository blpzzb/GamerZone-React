import './Ofertas.css'
import Navbar from '../../components/Navbar.jsx'
import ProductoCard from '../../components/ProductoCard.jsx'

function Ofertas({ productos }) {
  const productosOferta = productos.filter(
    (producto) => producto.oferta
  )

  return (
    <>
      <Navbar />

      <main className="pagina-ofertas">
        <div className="container">

          <div className="text-center mb-5">
            <p className="texto-pequeno">
              GAMERZONE
            </p>

            <h1 className="fw-bold">
              Ofertas
            </h1>

            <p className="texto-gris">
              Revisa los productos que tenemos en oferta.
            </p>
          </div>

          <div className="row g-4">

            {productosOferta.map((producto) => (
              <ProductoCard
                key={producto.id}
                id={producto.id}
                imagen={producto.imagen}
                categoria={producto.categoria}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={`$${producto.precio.toLocaleString('es-CL')}`}
              />
            ))}

          </div>

        </div>
      </main>
    </>
  )
}

export default Ofertas