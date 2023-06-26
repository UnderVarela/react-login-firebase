import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
// import { Navigate } from 'react-router-dom'

function AccesoNoPermitido () {
  return (<><h1 className='text-red-700'>Acceso no permitdo</h1></>)
}

export function AccesoPrivado ({ children }) {
  const { uid } = useContext(UserContext)
  if (!uid) return <AccesoNoPermitido />
  // if (!uid) return <Navigate to='/acceso-no-permitido' />
  return (
    <>
      {children}
    </>
  )
}
