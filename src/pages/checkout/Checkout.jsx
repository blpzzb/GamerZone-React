import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'
import Navbar from '../../components/Navbar.jsx'

function Checkout({ carrito }) {
  const navigate = useNavigate()

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [direccion, setDireccion] = useState('')
  const [region, setRegion] = useState('')
  const [comuna, setComuna] = useState('')
  const [indicaciones, setIndicaciones] = useState('')

  const total = carrito.reduce(
    (suma, producto) =>
      suma + producto.precio * producto.cantidad,
    0
  )

  function enviarFormulario(evento) {
    evento.preventDefault()

    if (
      nombre === '' ||
      apellido === '' ||
      correo === '' ||
      direccion === '' ||
      region === '' ||
      comuna === ''
    ) {
      navigate('/pago-fallido')
    } else {
      navigate('/pago-exitoso')
    }
  }

  return (
    <>
      <Navbar />

      <main className="pagina-checkout">
        <div className="container">

          <div className="text-center mb-5">
            <p className="texto-pequeno">
              GAMERZONE
            </p>

            <h1 className="fw-bold">
              Finalizar compra
            </h1>

            <p className="texto-gris">
              Completa tus datos para continuar con tu compra.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-lg-7">

              <form
                className="checkout-formulario"
                onSubmit={enviarFormulario}
              >

                <h4 className="mb-4">
                  Información del cliente
                </h4>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Nombre
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa tu nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Apellido
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa tu apellido"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                  </div>

                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Correo
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="correo@ejemplo.cl"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>

                <h4 className="mb-4">
                  Dirección de entrega
                </h4>

                <div className="mb-3">
                  <label className="form-label">
                    Dirección
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Calle y número"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Región
                    </label>

                    <select
                      className="form-select"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option value="">
                        Seleccionar región
                      </option>

                      <option value="Arica y Parinacota">
                        Arica y Parinacota
                      </option>

                      <option value="Tarapacá">
                        Tarapacá
                      </option>

                      <option value="Antofagasta">
                        Antofagasta
                      </option>

                      <option value="Atacama">
                        Atacama
                      </option>

                      <option value="Coquimbo">
                        Coquimbo
                      </option>

                      <option value="Valparaíso">
                        Valparaíso
                      </option>

                      <option value="Metropolitana">
                        Región Metropolitana
                      </option>

                      <option value="O'Higgins">
                        O'Higgins
                      </option>

                      <option value="Maule">
                        Maule
                      </option>

                      <option value="Ñuble">
                        Ñuble
                      </option>

                      <option value="Biobío">
                        Biobío
                      </option>

                      <option value="La Araucanía">
                        La Araucanía
                      </option>

                      <option value="Los Ríos">
                        Los Ríos
                      </option>

                      <option value="Los Lagos">
                        Los Lagos
                      </option>

                      <option value="Aysén">
                        Aysén
                      </option>

                      <option value="Magallanes">
                        Magallanes y de la Antártica Chilena
                      </option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Comuna
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa tu comuna"
                      value={comuna}
                      onChange={(e) => setComuna(e.target.value)}
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Indicaciones de entrega
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Opcional"
                    value={indicaciones}
                    onChange={(e) => setIndicaciones(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn boton-gamer w-100 mt-3"
                >
                  Realizar pago
                </button>

              </form>

            </div>

            <div className="col-lg-5">

              <div className="resumen-compra">

                <h4 className="mb-4">
                  Resumen de compra
                </h4>

                {carrito.map((producto) => (
                  <div
                    className="producto-resumen"
                    key={producto.id}
                  >

                    <div>
                      <strong>
                        {producto.nombre}
                      </strong>

                      <p className="texto-gris mb-0">
                        Cantidad: {producto.cantidad}
                      </p>
                    </div>

                    <span>
                      $
                      {(
                        producto.precio * producto.cantidad
                      ).toLocaleString('es-CL')}
                    </span>

                  </div>
                ))}

                <div className="total-checkout">

                  <strong>
                    Total
                  </strong>

                  <strong>
                    ${total.toLocaleString('es-CL')}
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  )
}

export default Checkout