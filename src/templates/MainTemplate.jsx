import { Outlet } from 'react-router-dom'
import { NavBar } from '../components'

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
