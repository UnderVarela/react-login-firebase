import { Link } from 'react-router-dom'

export function NavBar () {
  return (
    <nav>
      <div>
        <Link to='/'>Inicio</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
    </nav>
  )
}
