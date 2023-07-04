import React, { useContext } from 'react'
import { ContainerForm } from '../../layouts/ContainerForm'
import { UserContext } from '../../context/UserContext'

export function Profile () {
  const { email, displayName } = useContext(UserContext)
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <ContainerForm title='Perfil de usuario' onSubmit={handleSubmit}>
      Email: {email} - {displayName}
    </ContainerForm>
  )
}
