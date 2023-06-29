import { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import PropTypes from 'prop-types'

// Crea un componente para proteger las rutas
export function ProtectedRoutes ({ children, to = '/', params = '' }) {
  // Quién puede entrar
  const parameters = useParams()
  const route = (params) ? `${to}/${parameters[params]}` : to
  const { uid } = useContext(UserContext)
  return (
    <>
      {uid ? children : <Navigate to={route} />}
    </>
  )
}

ProtectedRoutes.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string,
  params: PropTypes.string
}
