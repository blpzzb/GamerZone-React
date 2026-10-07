import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'

import Ofertas from './Ofertas.jsx'

describe('Ofertas', () => {
  let contenedor
  let root

  const productosPrueba = [
    {
      id: 1,
      nombre: 'Mouse Gamer RGB',
      categoria: 'Periféricos',
      descripcion: 'Mouse para videojuegos',
      precio: 29990,
      imagen: '/img/mouse.jpg',
      destacado: true,
      oferta: true,
    },
    {
      id: 2,
      nombre: 'Monitor Gamer 165 Hz',
      categoria: 'Monitores',
      descripcion: 'Monitor para videojuegos',
      precio: 199990,
      imagen: '/img/monitor.jpg',
      destacado: true,
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

  it('muestra solamente los productos que están en oferta', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <Ofertas productos={productosPrueba} />
        </MemoryRouter>
      )
    })

    expect(contenedor.textContent).toContain(
      'Mouse Gamer RGB'
    )

    expect(contenedor.textContent).not.toContain(
      'Monitor Gamer 165 Hz'
    )
  })
})