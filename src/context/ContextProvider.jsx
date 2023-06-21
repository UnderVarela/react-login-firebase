import PropTypes from 'prop-types'
import { Contexto } from './ContextoContext'
import { useState } from 'react'

export function ContextProvider ({ children }) {
  const [counter, setCounter] = useState(0)
  return (
    <Contexto.Provider value={{ counter, setCounter, nombre: 'Xurxo' }}>
      {children}
    </Contexto.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.any
}
