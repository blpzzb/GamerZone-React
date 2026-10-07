import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'

import Registro from './Registro.jsx'

describe('Registro', () => {
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

  it('muestra registro completado cuando los datos son correctos', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <Registro />
        </MemoryRouter>
      )
    })

    const inputs = contenedor.querySelectorAll('input')

    const nombre = inputs[0]
    const correo = inputs[1]
    const contrasena = inputs[2]

    const formulario = contenedor.querySelector('form')

    act(() => {
      escribir(nombre, 'Javier')
      escribir(correo, 'javier@gamerzone.cl')
      escribir(contrasena, '123456')
    })

    act(() => {
      formulario.dispatchEvent(
        new Event('submit', {
          bubbles: true,
          cancelable: true,
        })
      )
    })

    expect(contenedor.textContent).toContain(
      'Registro completado correctamente.'
    )
  })
})