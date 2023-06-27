import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'
import { UserProvider } from './context/UserProvider'
import { MyTheme } from './components/theme/MyTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <MyTheme>
        <RouterProvider router={router} />
      </MyTheme>
    </UserProvider>
  </React.StrictMode>
)
