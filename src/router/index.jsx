import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, LoginPage, ExperienciasAdmin, ExperiencesForm } from '../pages'
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
        element: <ProtectedRoutes><ExperienciasAdmin /></ProtectedRoutes>
      },
      {
        path: 'nueva-experiencia',
        element: <ExperiencesForm />
      }
    ]
  }
])
