import { act } from 'react'
import { createRoot } from 'react-dom/client'
import {
  MemoryRouter,
  Routes,
  Route,
} from 'react-router-dom'

import DetalleProducto from './DetalleProducto.jsx'

describe('DetalleProducto', () => {
  let contenedor
  let root

  const productosPrueba = [
    {
      id: 1,
      nombre: 'Control Gamer',
      categoria: 'Accesorios',
      descripcion: 'Control para videojuegos',
      precio: 44990,
      imagen: '/img/control.jpg',
      destacado: false,
      oferta: false,
    },
  ]

  beforeEach(() => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true

    contenedor = document.createElement('div')
    document.body.appendChild(contenedor)

    root = createRoot(contenedor)
  })

  afterEach(() => {
    act(() => {
      root.unmount()
    })

    contenedor.remove()
  })

  it('ejecuta agregarAlCarrito al presionar el botón', () => {
    const agregarAlCarrito = jasmine.createSpy(
      'agregarAlCarrito'
    )

    act(() => {
      root.render(
        <MemoryRouter initialEntries={['/productos/1']}>
          <Routes>

            <Route
              path="/productos/:id"
              element={
                <DetalleProducto
                  productos={productosPrueba}
                  agregarAlCarrito={agregarAlCarrito}
                />
              }
            />

            <Route
              path="/carrito"
              element={<div>Carrito</div>}
            />

          </Routes>
        </MemoryRouter>
      )
    })

    const boton = Array.from(
      contenedor.querySelectorAll('button')
    ).find(
      (elemento) =>
        elemento.textContent.includes('Agregar al carrito')
    )

    act(() => {
      boton.click()
    })

    expect(agregarAlCarrito).toHaveBeenCalledWith(
      productosPrueba[0]
    )
  })
})