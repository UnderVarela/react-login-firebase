import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, LoginPage, ExperienciasAdmin } from '../pages'
import { ProtectedRoutes } from '../components'

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
        element: <LoginPage />
      },
      {
        path: 'experiencias',
        element: <ProtectedRoutes to='/login'><ExperienciasAdmin /></ProtectedRoutes>
      }
    ]
  }
])
