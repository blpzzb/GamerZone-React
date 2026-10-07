import { useState } from 'react'
import './AdminProductos.css'
import Navbar from '../../components/Navbar.jsx'

function AdminProductos({ productos, setProductos }) {
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [imagen, setImagen] = useState('')
  const [destacado, setDestacado] = useState(false)
  const [oferta, setOferta] = useState(false)

  const [idEditando, setIdEditando] = useState(null)

  function limpiarFormulario() {
    setNombre('')
    setCategoria('')
    setDescripcion('')
    setPrecio('')
    setImagen('')
    setDestacado(false)
    setOferta(false)
    setIdEditando(null)
  }

  function guardarProducto(evento) {
    evento.preventDefault()

    if (idEditando !== null) {
      setProductos(
        productos.map((producto) =>
          producto.id === idEditando
            ? {
                ...producto,
                nombre: nombre,
                categoria: categoria,
                descripcion: descripcion,
                precio: Number(precio),
                imagen: imagen,
                destacado: destacado,
                oferta: oferta,
              }
            : producto
        )
      )
    } else {
      const nuevoProducto = {
        id: productos.length + 1,
        nombre: nombre,
        categoria: categoria,
        descripcion: descripcion,
        precio: Number(precio),
        imagen: imagen,
        destacado: destacado,
        oferta: oferta,
      }

      setProductos([
        ...productos,
        nuevoProducto,
      ])
    }

    limpiarFormulario()
  }

  function editarProducto(producto) {
    setIdEditando(producto.id)
    setNombre(producto.nombre)
    setCategoria(producto.categoria)
    setDescripcion(producto.descripcion)
    setPrecio(producto.precio)
    setImagen(producto.imagen)
    setDestacado(producto.destacado)
    setOferta(producto.oferta)
  }

  function eliminarProducto(id) {
    setProductos(
      productos.filter((producto) => producto.id !== id)
    )
  }

  return (
    <>
      <Navbar />

      <main className="pagina-admin">
        <div className="container">

          <div className="mb-5">
            <p className="texto-pequeno">
              ADMINISTRACIÓN
            </p>

            <h1 className="fw-bold">
              Gestión de productos
            </h1>

            <p className="texto-gris">
              Administra los productos registrados en GamerZone.
            </p>
          </div>


          <div className="formulario-admin mb-5">

            <h4 className="mb-4">
              {idEditando !== null
                ? 'Editar producto'
                : 'Nuevo producto'}
            </h4>

            <form onSubmit={guardarProducto}>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Nombre
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>


                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Categoría
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                  />
                </div>

              </div>


              <div className="mb-3">
                <label className="form-label">
                  Descripción
                </label>

                <textarea
                  className="form-control"
                  rows="3"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                ></textarea>
              </div>


              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Precio
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                  />
                </div>


                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Imagen
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="/img/producto.jpg"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    required
                  />
                </div>

              </div>


              <div className="form-check mb-2">

                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={destacado}
                  onChange={(e) => setDestacado(e.target.checked)}
                />

                <label className="form-check-label">
                  Producto destacado
                </label>

              </div>


              <div className="form-check mb-4">

                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={oferta}
                  onChange={(e) => setOferta(e.target.checked)}
                />

                <label className="form-check-label">
                  Producto en oferta
                </label>

              </div>


              <button
                type="submit"
                className="btn boton-gamer"
              >
                {idEditando !== null
                  ? 'Guardar cambios'
                  : 'Agregar producto'}
              </button>

            </form>

          </div>


          <div className="table-responsive">

            <table className="table table-dark table-bordered align-middle">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Oferta</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>

                {productos.map((producto) => (
                  <tr key={producto.id}>

                    <td>
                      {producto.id}
                    </td>

                    <td>
                      {producto.nombre}
                    </td>

                    <td>
                      {producto.categoria}
                    </td>

                    <td>
                      ${producto.precio.toLocaleString('es-CL')}
                    </td>

                    <td>
                      {producto.oferta ? 'Sí' : 'No'}
                    </td>

                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => editarProducto(producto)}
                      >
                        Editar
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        Eliminar
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      </main>
    </>
  )
}

export default AdminProductos