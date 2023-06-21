import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginForm } from '../components/login/LoginForm'
import { UserContext } from '../context/UserContext'

export function LoginPage () {
  const { error, uid, isLoading } = useContext(UserContext)
  return (
    <>
      <h1 className='text-4xl'>Ejemplo de conexión</h1>
      <LoginForm />
      {error?.message}
      {uid && <Navigate to='/' />}
      {isLoading && 'Cargando....'}
    </>
  )
}
