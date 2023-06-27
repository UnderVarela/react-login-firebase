import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, ExperienciasAdmin } from '../pages'
import { ProtectedRoutes, PublicRoutes } from '../components'
import { LoginUI } from '../pages/LoginUI'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'login',
        element: <PublicRoutes><LoginUI /></PublicRoutes>
      },
      {
        path: 'experiencias',
        element: <ProtectedRoutes to='/login'><ExperienciasAdmin /></ProtectedRoutes>
      }
    ]
  }
])
