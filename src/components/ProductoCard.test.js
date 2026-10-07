import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'

import ProductoCard from './ProductoCard.jsx'

describe('ProductoCard', () => {
  let contenedor
  let root

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

  it('muestra correctamente los datos recibidos por props', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <ProductoCard
            id={1}
            imagen="/img/mouse.jpg"
            categoria="Periféricos"
            nombre="Mouse Gamer RGB"
            descripcion="Mouse para videojuegos"
            precio="$29.990"
          />
        </MemoryRouter>
      )
    })

    expect(contenedor.textContent).toContain('Mouse Gamer RGB')
    expect(contenedor.textContent).toContain('Periféricos')
    expect(contenedor.textContent).toContain('$29.990')
  })

  it('genera el enlace correcto para ver el producto', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <ProductoCard
            id={3}
            imagen="/img/monitor.jpg"
            categoria="Monitores"
            nombre="Monitor Gamer 165 Hz"
            descripcion="Monitor para videojuegos"
            precio="$199.990"
          />
        </MemoryRouter>
      )
    })

    const enlace = contenedor.querySelector('a')

    expect(enlace.textContent).toContain('Ver producto')
    expect(enlace.getAttribute('href')).toBe('/productos/3')
  })
})