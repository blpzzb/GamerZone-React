import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'

import Inicio from './Inicio.jsx'

describe('Inicio', () => {
  let contenedor
  let root

  const productosPrueba = [
    {
      id: 1,
      nombre: 'Teclado Mecánico RGB',
      categoria: 'Periféricos',
      descripcion: 'Teclado para videojuegos',
      precio: 59990,
      imagen: '/img/teclado.jpg',
      destacado: true,
      oferta: false,
    },
    {
      id: 2,
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

  it('muestra solamente los productos destacados', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <Inicio productos={productosPrueba} />
        </MemoryRouter>
      )
    })

    expect(contenedor.textContent).toContain(
      'Teclado Mecánico RGB'
    )

    expect(contenedor.textContent).not.toContain(
      'Control Gamer'
    )
  })
})