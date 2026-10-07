import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './pages/inicio/Inicio.jsx'
import Productos from './pages/productos/Productos.jsx'
import Categorias from './pages/categorias/Categorias.jsx'
import Ofertas from './pages/ofertas/Ofertas.jsx'
import DetalleProducto from './pages/detalleProducto/DetalleProducto.jsx'
import Carrito from './pages/carrito/Carrito.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import PagoExitoso from './pages/pagoExitoso/PagoExitoso.jsx'
import PagoFallido from './pages/pagoFallido/PagoFallido.jsx'
import AdminProductos from './pages/adminProductos/AdminProductos.jsx'
import Registro from './pages/registro/Registro.jsx'
import Login from './pages/login/Login.jsx'
import Blogs from './pages/blogs/Blogs.jsx'
import DetalleBlog from './pages/detalleBlog/DetalleBlog.jsx'

import productosIniciales from './data/productos.js'

function App() {
  const [carrito, setCarrito] = useState([])

  const [productos, setProductos] = useState(() => {
    const productosGuardados = localStorage.getItem('productos')

    if (productosGuardados) {
      return JSON.parse(productosGuardados)
    }

    return productosIniciales
  })

  useEffect(() => {
    localStorage.setItem(
      'productos',
      JSON.stringify(productos)
    )
  }, [productos])

  function agregarAlCarrito(producto) {
    const productoExiste = carrito.find(
      (item) => item.id === producto.id
    )

    if (productoExiste) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      )
    } else {
      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1,
        },
      ])
    }
  }

  function aumentarCantidad(id) {
    setCarrito(
      carrito.map((item) =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    )
  }

  function disminuirCantidad(id) {
    setCarrito(
      carrito
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    )
  }

  function eliminarDelCarrito(id) {
    setCarrito(
      carrito.filter((item) => item.id !== id)
    )
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Inicio productos={productos} />
          }
        />

        <Route
          path="/productos"
          element={
            <Productos productos={productos} />
          }
        />

        <Route
          path="/productos/:id"
          element={
            <DetalleProducto
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />

        <Route
          path="/categorias"
          element={
            <Categorias productos={productos} />
          }
        />

        <Route
          path="/ofertas"
          element={
            <Ofertas productos={productos} />
          }
        />

        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout carrito={carrito} />
          }
        />

        <Route
          path="/pago-exitoso"
          element={
            <PagoExitoso />
          }
        />

        <Route
          path="/pago-fallido"
          element={
            <PagoFallido />
          }
        />

        <Route
          path="/registro"
          element={
            <Registro />
          }
        />

        <Route
          path="/login"
          element={
            <Login />
          }
        />

        <Route
          path="/blogs"
          element={
            <Blogs />
          }
        />

        <Route
          path="/blogs/:id"
          element={
            <DetalleBlog />
          }
        />

        <Route
          path="/admin/productos"
          element={
            <AdminProductos
              productos={productos}
              setProductos={setProductos}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App