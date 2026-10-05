import { useState } from 'react'
import './Categorias.css'
import Navbar from '../../components/Navbar.jsx'
import ProductoCard from '../../components/ProductoCard.jsx'
import productos from '../../data/productos.js'

function Categorias() {
  const [categoria, setCategoria] = useState('Todos')

  const productosFiltrados =
    categoria === 'Todos'
      ? productos
      : productos.filter((producto) => producto.categoria === categoria)

  return (
    <>
      <Navbar />

      <main className="pagina-categorias">
        <div className="container">

          <div className="text-center mb-5">
            <p className="texto-pequeno">
              GAMERZONE
            </p>

            <h1 className="fw-bold">
              Categorías
            </h1>

            <p className="texto-gris">
              Selecciona una categoría para ver nuestros productos.
            </p>
          </div>

          <div className="text-center mb-5">

            <button
              className="btn boton-categoria"
              onClick={() => setCategoria('Todos')}
            >
              Todos
            </button>

            <button
              className="btn boton-categoria"
              onClick={() => setCategoria('Periféricos')}
            >
              Periféricos
            </button>

            <button
              className="btn boton-categoria"
              onClick={() => setCategoria('Monitores')}
            >
              Monitores
            </button>

            <button
              className="btn boton-categoria"
              onClick={() => setCategoria('Accesorios')}
            >
              Accesorios
            </button>

            <button
              className="btn boton-categoria"
              onClick={() => setCategoria('Computadores')}
            >
              Computadores
            </button>

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

export default Categorias