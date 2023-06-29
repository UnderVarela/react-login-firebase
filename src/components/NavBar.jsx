/* eslint-disable react/jsx-closing-tag-location */
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export function NavBar () {
  const { uid, email, _signOut } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    _signOut()
    navigate('/')
  }
  return (
    <nav className='flex justify-between bg-slate-500'>
      <ul className='flex items-center gap-2'>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        {uid && <li><Link to='/experiencias'>Experiencias</Link></li>}
        {uid && <li className='text-white'>Benvido {email}</li>}
      </ul>
      <fieldset className='flex gap-2'>
        {
          uid
            ? <button
                className='p-2 bg-red-400 rounded'
                onClick={handleLogout}
              >Logout
            </button>
            : <button
                className='p-2 bg-blue-400 rounded'
                onClick={() => navigate('/login')}
              >
              Login
            </button>
        }

      </fieldset>
    </nav>
  )
}
