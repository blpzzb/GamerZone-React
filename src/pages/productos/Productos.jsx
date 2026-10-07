import { useState } from 'react'
import './Productos.css'
import Navbar from '../../components/Navbar.jsx'
import ProductoCard from '../../components/ProductoCard.jsx'

function Productos({ productos }) {
  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <Navbar />

      <main className="pagina-productos">
        <div className="container">

          <div className="text-center mb-5">
            <p className="texto-pequeno">
              GAMERZONE
            </p>

            <h1 className="fw-bold">
              Nuestros productos
            </h1>

            <p className="texto-gris">
              Revisa los productos disponibles en nuestra tienda.
            </p>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-md-6">

              <input
                type="text"
                className="form-control"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />

            </div>
          </div>

          <div className="row g-4">

            {productosFiltrados.map((producto) => (
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

export default Productos