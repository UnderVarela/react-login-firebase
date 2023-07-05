import React, { useContext, useRef, useState } from 'react'
import { ContainerForm } from '../../layouts/ContainerForm'
import { UserContext } from '../../context/UserContext'

export function Profile () {
  const { email, displayName } = useContext(UserContext)
  const [image, setImage] = useState(null)
  const inputFileRef = useRef()
  const handleSubmit = e => {
    e.preventDefault()
  }

  const cleanUp = () => {
    URL.revokeObjectURL(image)
    inputFileRef.current.value = null
  }

  const handleChange = e => {
    cleanUp()
    const newImage = e.target.files[0]
    if (newImage) {
      setImage(URL.createObjectURL(newImage))
    }
  }
  return (
    <ContainerForm title='Perfil de usuario' onSubmit={handleSubmit}>
      Email: {email} - {displayName}
      <input type='file' onChange={handleChange} ref={inputFileRef} />
      {image}
      <img src={image}  alt="" />
    </ContainerForm>
  )
}
