import { useState } from 'react'
import './Login.css'
import Navbar from '../../components/Navbar.jsx'

function Login() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mensaje, setMensaje] = useState('')

  function iniciarSesion(evento) {
    evento.preventDefault()

    if (correo === '' || contrasena === '') {
      setMensaje('Completa todos los campos.')
      return
    }

    setMensaje('Inicio de sesión correcto.')

    setCorreo('')
    setContrasena('')
  }

  return (
    <>
      <Navbar />

      <main className="pagina-login">
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-5 col-md-7">

              <div className="login-card">

                <div className="text-center mb-4">

                  <p className="texto-pequeno">
                    GAMERZONE
                  </p>

                  <h1 className="fw-bold">
                    Iniciar sesión
                  </h1>

                  <p className="texto-gris">
                    Ingresa tus datos para acceder a GamerZone.
                  </p>

                </div>


                <form onSubmit={iniciarSesion}>

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
                    Ingresar
                  </button>


                  {mensaje !== '' && (
                    <p className="mensaje-login text-center mt-3">
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

export default Login