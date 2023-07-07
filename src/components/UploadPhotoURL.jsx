import { useRef, useState } from 'react'
import { Alert, Avatar, Button, Stack } from '@mui/material'
import PropTypes from 'prop-types'

export function UploadPhotoURL ({ setUserFiels, _updateProfile }) {
  const [image, setImage] = useState({
    isLoading: false,
    error: null,
    createObjectURL: ''
  })
  const inputFileRef = useRef()

  const upload = async file => {
    setImage({
      isLoading: true,
      error: null,
      createObjectURL: ''
    })
    setImage({
      ...image,
      createObjectURL: URL.createObjectURL(file)
    })
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'ngp3nkgu')
    formData.append('api_key', '153898983155635')
    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dimvf1zl2/image/upload',
        {
          method: 'POST',
          body: formData
        }
      )
      const fileData = await response.json()
      const profileFormData = new FormData()
      profileFormData.append('photoURL', fileData.url)
      const data = Object.fromEntries(profileFormData.entries())
      _updateProfile(data)
      setUserFiels({ photoURL: fileData.url })
    } catch (error) {
      setImage({
        ...image,
        error
      })
    } finally {
      setImage({
        ...image,
        isLoading: false
      })
    }
  }
  const cleanUp = () => {
    URL.revokeObjectURL(image.createObjectURL)
    inputFileRef.current.value = ''
    setImage({
      ...image,
      createObjectURL: ''
    })
  }

  const handleFile = ({ target }) => {
    const newImage = target.files[0]
    if (newImage) upload(newImage)
    else cleanUp()
  }
  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={0.5}
      >
        <input type='file' onChange={handleFile} ref={inputFileRef} />
        <Button type='button' onClick={cleanUp}>Limpiar </Button>
      </Stack>
      {image.createObjectURL && <Avatar alt='Imagen de perfil' src={image.createObjectURL} />}
      {image.error && <Alert severity='error'>{image.error}</Alert>}
      {image.isLoading && <Alert severity='info'>Subiendo...</Alert>}
    </>
  )
}

UploadPhotoURL.propTypes = {
  _updateProfile: PropTypes.func,
  setUserFiels: PropTypes.func
}
