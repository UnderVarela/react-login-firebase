import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function MainTemplate () {
  return (
    <>
      <header className='bg-red-500 main-header'>
        <h1>Portafolio xurxo</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
