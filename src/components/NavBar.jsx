import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export function NavBar () {
  const { _signOut } = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <nav className='flex justify-between bg-slate-500'>
      <ul className='flex items-center gap-2'>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/experiencias'>Experiencias</Link>
        </li>
      </ul>
      <fieldset className='flex gap-2'>
        <button
          className='p-2 bg-blue-400 rounded'
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className='p-2 bg-red-400 rounded'
          onClick={() => _signOut()}
        >
          Logout
        </button>
      </fieldset>
    </nav>
  )
}
