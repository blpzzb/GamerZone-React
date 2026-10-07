import { Link } from 'react-router-dom'
import './Blogs.css'
import Navbar from '../../components/Navbar.jsx'

function Blogs() {
  return (
    <>
      <Navbar />

      <main className="pagina-blogs">
        <div className="container">

          <div className="text-center mb-5">

            <p className="texto-pequeno">
              GAMERZONE
            </p>

            <h1 className="fw-bold">
              Blogs
            </h1>

            <p className="texto-gris">
              Consejos y novedades para mejorar tu experiencia gamer.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-6">

              <div className="blog-card h-100">

                <img
                  src="/img/pc-gamer.jpg"
                  className="blog-imagen"
                  alt="PC Gamer"
                />

                <div className="blog-contenido">

                  <p className="texto-pequeno">
                    HARDWARE
                  </p>

                  <h3>
                    Cómo mejorar tu PC Gamer
                  </h3>

                  <p className="texto-gris">
                    Conoce algunos componentes importantes para mejorar
                    el rendimiento de tu computador.
                  </p>

                  <Link
                    to="/blogs/1"
                    className="btn boton-gamer"
                  >
                    Leer más
                  </Link>

                </div>

              </div>

            </div>


            <div className="col-md-6">

              <div className="blog-card h-100">

                <img
                  src="/img/banner-gamer.jpg"
                  className="blog-imagen"
                  alt="Setup Gamer"
                />

                <div className="blog-contenido">

                  <p className="texto-pequeno">
                    SETUP
                  </p>

                  <h3>
                    Consejos para tu setup gamer
                  </h3>

                  <p className="texto-gris">
                    Revisa algunos consejos para organizar y mejorar
                    tu espacio de juego.
                  </p>

                  <Link
                    to="/blogs/2"
                    className="btn boton-gamer"
                  >
                    Leer más
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  )
}

export default Blogs