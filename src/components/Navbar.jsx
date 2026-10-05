import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-gamer">
      <div className="container">

        <Link className="navbar-brand logo-gamer" to="/">
          GamerZone
        </Link>

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

            <Link className="nav-link" to="/">
              Inicio
            </Link>

            <Link className="nav-link" to="/productos">
              Productos
            </Link>

            <Link className="nav-link" to="/categorias">
              Categorías
            </Link>

            <Link className="nav-link" to="/ofertas">
              Ofertas
            </Link>

            <Link className="nav-link" to="/carrito">
              Carrito
            </Link>

            <a className="nav-link" href="/#nosotros">
              Nosotros
            </a>

            <a className="nav-link" href="/#contacto">
              Contacto
            </a>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar