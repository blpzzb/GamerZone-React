import './Inicio.css'

function Inicio() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-gamer">
        <div className="container">

          <a className="navbar-brand logo-gamer" href="#">
            GamerZone
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="menuPrincipal"
          >
            <div className="navbar-nav ms-auto">

              <a className="nav-link active" href="#">
                Inicio
              </a>

              <a className="nav-link" href="#productos">
                Productos
              </a>

              <a className="nav-link" href="#nosotros">
                Nosotros
              </a>

              <a className="nav-link" href="#contacto">
                Contacto
              </a>

            </div>
          </div>

        </div>
      </nav>


      <main>

        <section className="hero">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6">

                <p className="texto-pequeno">
                  GAMING · HARDWARE · SETUP
                </p>

                <h1 className="display-4 fw-bold">
                  Todo para tu
                  <span className="texto-morado">
                    {' '}setup gamer
                  </span>
                </h1>

                <p className="hero-texto mt-3">
                  Encuentra computadores, periféricos y accesorios
                  para mejorar tu experiencia de juego.
                </p>

                <div className="mt-4">

                  <a
                    href="#productos"
                    className="btn boton-gamer me-2"
                  >
                    Ver productos
                  </a>

                  <a
                    href="#nosotros"
                    className="btn btn-outline-light"
                  >
                    Conócenos
                  </a>

                </div>

              </div>


              <div className="col-lg-6 mt-4 mt-lg-0">

                <img
                  src="/img/banner-gamer.jpg"
                  className="img-fluid hero-imagen"
                  alt="Setup gamer"
                />

              </div>

            </div>
          </div>
        </section>


        <section
          id="productos"
          className="productos"
        >
          <div className="container">

            <div className="text-center mb-5">

              <p className="texto-pequeno">
                GAMERZONE
              </p>

              <h2 className="fw-bold">
                Productos destacados
              </h2>

              <p className="texto-gris">
                Algunos productos para comenzar o mejorar tu setup.
              </p>

            </div>


            <div className="row g-4">

              <div className="col-md-4">

                <div className="card producto-card h-100">

                  <img
                    src="/img/teclado.jpg"
                    className="card-img-top"
                    alt="Teclado gamer"
                  />

                  <div className="card-body">

                    <small>
                      PERIFÉRICOS
                    </small>

                    <h5 className="card-title mt-2">
                      Teclado Mecánico RGB
                    </h5>

                    <p className="card-text">
                      Teclado mecánico con iluminación RGB,
                      ideal para gaming.
                    </p>

                    <h5 className="precio">
                      $59.990
                    </h5>

                    <button className="btn boton-producto">
                      Ver producto
                    </button>

                  </div>

                </div>
              </div>


              <div className="col-md-4">

                <div className="card producto-card h-100">

                  <img
                    src="/img/mouse.jpg"
                    className="card-img-top"
                    alt="Mouse gamer"
                  />

                  <div className="card-body">

                    <small>
                      PERIFÉRICOS
                    </small>

                    <h5 className="card-title mt-2">
                      Mouse Gamer RGB
                    </h5>

                    <p className="card-text">
                      Mouse cómodo y preciso para jugar
                      durante varias horas.
                    </p>

                    <h5 className="precio">
                      $29.990
                    </h5>

                    <button className="btn boton-producto">
                      Ver producto
                    </button>

                  </div>

                </div>
              </div>


              <div className="col-md-4">

                <div className="card producto-card h-100">

                  <img
                    src="/img/monitor.jpg"
                    className="card-img-top"
                    alt="Monitor gamer"
                  />

                  <div className="card-body">

                    <small>
                      MONITORES
                    </small>

                    <h5 className="card-title mt-2">
                      Monitor Gamer 165 Hz
                    </h5>

                    <p className="card-text">
                      Monitor pensado para disfrutar una imagen
                      más fluida al jugar.
                    </p>

                    <h5 className="precio">
                      $199.990
                    </h5>

                    <button className="btn boton-producto">
                      Ver producto
                    </button>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        <section
          id="nosotros"
          className="nosotros"
        >
          <div className="container">
            <div className="row align-items-center">

              <div className="col-md-6 mb-4 mb-md-0">

                <img
                  src="/img/nosotros-equipo.jpg"
                  className="img-fluid nosotros-imagen"
                  alt="Equipo gamer"
                />

              </div>


              <div className="col-md-6">

                <p className="texto-pequeno">
                  SOBRE GAMERZONE
                </p>

                <h2 className="fw-bold mb-3">
                  Una tienda pensada para gamers
                </h2>

                <p className="texto-gris">
                  GamerZone nace como una tienda enfocada en
                  productos para videojuegos, computadores y setups.
                </p>

                <p className="texto-gris">
                  Nuestro objetivo es ayudar a encontrar productos
                  para mejorar la experiencia de juego.
                </p>

                <a
                  href="#contacto"
                  className="btn boton-gamer mt-2"
                >
                  Contactarnos
                </a>

              </div>

            </div>
          </div>
        </section>


        <section
          id="contacto"
          className="contacto"
        >
          <div className="container">

            <div className="text-center mb-5">

              <p className="texto-pequeno">
                CONTACTO
              </p>

              <h2 className="fw-bold">
                ¿Necesitas ayuda?
              </h2>

              <p className="texto-gris">
                Déjanos tus datos y cuéntanos qué producto buscas.
              </p>

            </div>


            <div className="row justify-content-center">

              <div className="col-lg-7">

                <form className="formulario-contacto">

                  <div className="row">

                    <div className="col-md-6 mb-3">

                      <label className="form-label">
                        Nombre
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ingresa tu nombre"
                      />

                    </div>


                    <div className="col-md-6 mb-3">

                      <label className="form-label">
                        Correo
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="correo@ejemplo.cl"
                      />

                    </div>

                  </div>


                  <div className="mb-3">

                    <label className="form-label">
                      Asunto
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Consulta por producto"
                    />

                  </div>


                  <div className="mb-4">

                    <label className="form-label">
                      Mensaje
                    </label>

                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Escribe tu consulta"
                    ></textarea>

                  </div>


                  <button
                    type="submit"
                    className="btn boton-gamer"
                  >
                    Enviar mensaje
                  </button>

                </form>

              </div>

            </div>

          </div>
        </section>

      </main>


      <footer className="footer-gamer">

        <div className="container text-center">

          <h5 className="logo-footer">
            GamerZone
          </h5>

          <p>
            Tu espacio para encontrar productos gamer.
          </p>

          <p className="mb-0 texto-footer">
            2026 · Desarrollo Fullstack II
          </p>

        </div>

      </footer>
    </>
  )
}

export default Inicio