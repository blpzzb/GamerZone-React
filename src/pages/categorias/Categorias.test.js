import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'

import Categorias from './Categorias.jsx'

describe('Categorias', () => {
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

  it('filtra productos al seleccionar una categoría', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <Categorias productos={productosPrueba} />
        </MemoryRouter>
      )
    })

    const botones = Array.from(
      contenedor.querySelectorAll('button')
    )

    const botonMonitores = botones.find(
      (boton) => boton.textContent === 'Monitores'
    )

    act(() => {
      botonMonitores.click()
    })

    expect(contenedor.textContent).toContain(
      'Monitor Gamer 165 Hz'
    )

    expect(contenedor.textContent).not.toContain(
      'Mouse Gamer RGB'
    )
  })
})