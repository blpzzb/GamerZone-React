import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'

import Productos from './Productos.jsx'

describe('Productos', () => {
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

  function escribir(input, valor) {
    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value'
    ).set

    setter.call(input, valor)

    input.dispatchEvent(
      new Event('input', {
        bubbles: true,
      })
    )
  }

  it('filtra los productos según el texto de búsqueda', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <Productos productos={productosPrueba} />
        </MemoryRouter>
      )
    })

    const buscador = contenedor.querySelector('input')

    act(() => {
      escribir(buscador, 'Monitor')
    })

    expect(contenedor.textContent).toContain(
      'Monitor Gamer 165 Hz'
    )

    expect(contenedor.textContent).not.toContain(
      'Mouse Gamer RGB'
    )
  })
})