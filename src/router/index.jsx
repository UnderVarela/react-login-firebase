import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, LoginPage, EditarExperiencia } from '../pages'
import { ExperiencesForm } from '../pages/ExperiencesForm'


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
        path: 'nueva-experiencia',
        element: <ExperiencesForm />
      },
      {
        path: 'experiencias/:experienciaId',
        element: <EditarExperiencia />
      }
    ]
  }
])
