import { Link, useParams } from 'react-router-dom'
import './DetalleBlog.css'
import Navbar from '../../components/Navbar.jsx'

function DetalleBlog() {
  const { id } = useParams()

  const blogs = [
    {
      id: 1,
      categoria: 'HARDWARE',
      titulo: 'Cómo mejorar tu PC Gamer',
      imagen: '/img/pc-gamer.jpg',
      texto:
        'Mejorar un PC Gamer puede comenzar por revisar componentes como la memoria RAM, el almacenamiento, la tarjeta gráfica y la refrigeración. Antes de realizar un cambio es importante revisar la compatibilidad de los componentes y considerar qué mejora necesita realmente el equipo.',
    },
    {
      id: 2,
      categoria: 'SETUP',
      titulo: 'Consejos para tu setup gamer',
      imagen: '/img/banner-gamer.jpg',
      texto:
        'Un buen setup gamer debe ser cómodo y ordenado. La posición del monitor, el espacio disponible para el teclado y mouse, la iluminación y la organización de los cables pueden ayudar a tener una mejor experiencia al momento de jugar.',
    },
  ]

  const blog = blogs.find(
    (item) => item.id === Number(id)
  )

  if (!blog) {
    return (
      <>
        <Navbar />

        <main className="pagina-detalle-blog">
          <div className="container text-center">

            <h2>
              Blog no encontrado
            </h2>

            <Link
              to="/blogs"
              className="btn boton-gamer mt-3"
            >
              Volver a Blogs
            </Link>

          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="pagina-detalle-blog">
        <div className="container">

          <div className="detalle-blog-card">

            <img
              src={blog.imagen}
              alt={blog.titulo}
              className="detalle-blog-imagen"
            />

            <div className="detalle-blog-contenido">

              <p className="texto-pequeno">
                {blog.categoria}
              </p>

              <h1 className="fw-bold mb-4">
                {blog.titulo}
              </h1>

              <p className="texto-gris detalle-blog-texto">
                {blog.texto}
              </p>

              <Link
                to="/blogs"
                className="btn boton-gamer mt-3"
              >
                Volver a Blogs
              </Link>

            </div>

          </div>

        </div>
      </main>
    </>
  )
}

export default DetalleBlog