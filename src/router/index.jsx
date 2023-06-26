import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, LoginPage } from '../pages'
import { ExperiencesForm } from '../pages/ExperiencesForm'
import { ExperienciasAdmin } from '../pages/private/ExperienciasAdmin'
import { AccesoPrivado } from '../components/AccesoPrivado'

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
        path:'acceso-no-permitido',
        element: <div>Acces no permitido</div>
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'experiencias',
        element: <AccesoPrivado><ExperienciasAdmin /></AccesoPrivado>
      },
      {
        path: 'nueva-experiencia',
        element: <ExperiencesForm />
      }
    ]
  }
])
