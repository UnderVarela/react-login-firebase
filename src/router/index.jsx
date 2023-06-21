import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { HomePage, LoginPage } from '../pages'

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
      }
    ]
  }
])
