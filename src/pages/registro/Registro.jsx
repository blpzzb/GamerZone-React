import { useState } from 'react'
import './Registro.css'
import Navbar from '../../components/Navbar.jsx'

function Registro() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mensaje, setMensaje] = useState('')

  function registrarUsuario(evento) {
    evento.preventDefault()

    if (
      nombre === '' ||
      correo === '' ||
      contrasena === ''
    ) {
      setMensaje('Completa todos los campos.')
      return
    }

    setMensaje('Registro completado correctamente.')

    setNombre('')
    setCorreo('')
    setContrasena('')
  }

  return (
    <>
      <Navbar />

      <main className="pagina-registro">
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-6 col-md-8">

              <div className="registro-card">

                <div className="text-center mb-4">

                  <p className="texto-pequeno">
                    GAMERZONE
                  </p>

                  <h1 className="fw-bold">
                    Crear cuenta
                  </h1>

                  <p className="texto-gris">
                    Regístrate para acceder a GamerZone.
                  </p>

                </div>


                <form onSubmit={registrarUsuario}>

                  <div className="mb-3">

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


                  <div className="mb-3">

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


                  <div className="mb-4">

                    <label className="form-label">
                      Contraseña
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Ingresa tu contraseña"
                      value={contrasena}
                      onChange={(e) => setContrasena(e.target.value)}
                    />

                  </div>


                  <button
                    type="submit"
                    className="btn boton-gamer w-100"
                  >
                    Registrarse
                  </button>


                  {mensaje !== '' && (
                    <p className="mensaje-registro text-center mt-3">
                      {mensaje}
                    </p>
                  )}

                </form>

              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  )
}

export default Registro