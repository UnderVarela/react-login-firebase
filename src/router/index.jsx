import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, ExperienciasAdmin, LoginPage, EditarExperiencias } from '../pages'
import { ProtectedRoutes, PublicRoutes } from '../components'

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
        element: <PublicRoutes><LoginPage /></PublicRoutes>
      },
      {
        path: 'experiencias',
        element: <ProtectedRoutes to='/experiencias'><ExperienciasAdmin /></ProtectedRoutes>
      },
      {
        path: 'experiencias/:idDoc',
        element: <EditarExperiencias />
      }
    ]
  }
])
