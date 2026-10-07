import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'

import Login from './Login.jsx'

describe('Login', () => {
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

  it('muestra un mensaje cuando los campos están vacíos', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      )
    })

    const formulario = contenedor.querySelector('form')

    act(() => {
      formulario.dispatchEvent(
        new Event('submit', {
          bubbles: true,
          cancelable: true,
        })
      )
    })

    expect(contenedor.textContent).toContain(
      'Completa todos los campos.'
    )
  })

  it('muestra inicio de sesión correcto con datos completos', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      )
    })

    const inputs = contenedor.querySelectorAll('input')
    const correo = inputs[0]
    const contrasena = inputs[1]
    const formulario = contenedor.querySelector('form')

    act(() => {
      escribir(correo, 'usuario@gamerzone.cl')
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
      'Inicio de sesión correcto.'
    )
  })
})