import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, ExperienciasAdmin, LoginPage, ExperienceEdit, Profile } from '../pages'
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
        path: 'profile',
        element: <ProtectedRoutes to='/login'><Profile /></ProtectedRoutes>
      },
      {
        path: 'experiencias',
        element: <ProtectedRoutes to='/login'><ExperienciasAdmin /></ProtectedRoutes>
      },
      {
        path: 'experiencias/:idDoc',
        element: <ProtectedRoutes to='/login' params='idDoc'><ExperienceEdit /></ProtectedRoutes>
      }
    ]
  }
])
