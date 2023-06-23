import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export function NavBar () {
  const { _signOut } = useContext(UserContext)
  return (
    <nav className='grid grid-cols-6 gap-2'>
      <div>
        <Link to='/'>Inicio</Link>
      </div>
      <div>
        <Link to='/nueva-experiencia'>Experiencias</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <button className='p-2 bg-blue-400 rounded' onClick={() => _signOut()}>
          Logout
        </button>
      </div>
    </nav>
  )
}
