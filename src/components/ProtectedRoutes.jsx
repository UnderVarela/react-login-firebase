import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import PropTypes from 'prop-types'

// Crea un componente para proteger las rutas
export function ProtectedRoutes ({ children, to = '/' }) {
  // Quién puede entrar
  const { uid } = useContext(UserContext)
  return (
    <>
      {uid ? children : <Navigate to={to} />}
    </>
  )
}

ProtectedRoutes.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string
}
