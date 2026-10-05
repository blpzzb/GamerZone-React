import { useState } from 'react'
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

function App() {
  const [carrito, setCarrito] = useState([])

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
          element={<Inicio />}
        />

        <Route
          path="/productos"
          element={<Productos />}
        />

        <Route
          path="/productos/:id"
          element={
            <DetalleProducto
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />

        <Route
          path="/categorias"
          element={<Categorias />}
        />

        <Route
          path="/ofertas"
          element={<Ofertas />}
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
            <Checkout
              carrito={carrito}
            />
          }
        />

        <Route
          path="/pago-exitoso"
          element={<PagoExitoso />}
        />

        <Route
          path="/pago-fallido"
          element={<PagoFallido />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App