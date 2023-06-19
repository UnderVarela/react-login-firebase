import { auth } from './helpers/firebase/firebase'

import { useUser } from './hooks/useUser'
import { LoginForm } from './components/login/LoginForm'
function App () {
  const { isLoading, email, uid, error, _signInWithEmailAndPassword, _signOut } = useUser(auth)

  const { message } = error || false

  const handleSign = ({ email, password }) => {
    _signInWithEmailAndPassword(email, password)
  }

  const handleSignOut = () => {
    _signOut()
  }

  return (
    <>
      <h1>Ejemplo de conexión</h1>
      <LoginForm onSubmit={handleSign} onSignOut={handleSignOut} />
      {message}
      {email}-{uid}
      {isLoading && 'Cargando....'}
    </>
  )
}

export default App
