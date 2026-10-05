import { Link } from 'react-router-dom'

function ProductoCard({
  id,
  imagen,
  categoria,
  nombre,
  descripcion,
  precio,
}) {
  return (
    <div className="col-md-4">
      <div className="card producto-card h-100">

        <img
          src={imagen}
          className="card-img-top"
          alt={nombre}
        />

        <div className="card-body">

          <small>
            {categoria}
          </small>

          <h5 className="card-title mt-2">
            {nombre}
          </h5>

          <p className="card-text">
            {descripcion}
          </p>

          <h5 className="precio">
            {precio}
          </h5>

          <Link
            to={`/productos/${id}`}
            className="btn boton-producto"
          >
            Ver producto
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ProductoCard