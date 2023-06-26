import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function MainTemplate () {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
