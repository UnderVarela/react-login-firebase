import React, { useContext, useRef, useState } from 'react'
import { ContainerForm } from '../../layouts/ContainerForm'
import { UserContext } from '../../context/UserContext'
import { Alert, Button, Grid, Skeleton, TextField } from '@mui/material'

export function Profile () {
  const { displayName, onChange, _updateProfile, error, isLoading } = useContext(UserContext)
  const [image, setImage] = useState(null)
  const [loader, setisLoader] = useState({
    isLoading: false,
    error: null
  })
  const inputFileRef = useRef()
  const cloudinaryURLRef = useRef('')
  const handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const formData = new FormData(target)
    if (cloudinaryURLRef.current) formData.append('photoURL', cloudinaryURLRef.current)
    const data = Object.fromEntries(formData.entries())
    _updateProfile(data)
  }

  const upload = async file => {
    setisLoader({
      isLoading: true,
      error: null
    })
    cloudinaryURLRef.current = ''
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
      console.log(fileData)
      cloudinaryURLRef.current = fileData.url
    } catch (error) {
      setisLoader({
        ...loader,
        error
      })
    } finally {
      setisLoader({
        ...loader,
        isLoading: false
      })
    }
  }

  const cleanUp = () => {
    URL.revokeObjectURL(image)
    inputFileRef.current.value = ''
    setImage(null)
  }

  const handleFile = ({ target }) => {
    const newImage = target.files[0]
    if (newImage) {
      setImage(URL.createObjectURL(newImage))
      upload(newImage)
    } else cleanUp()
  }

  if (isLoading) {
    return (
      <ContainerForm title='Perfil de usuario' onSubmit={() => {}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Skeleton>
              <TextField
                autoComplete='given-name'
                name='displayName'
                fullWidth
                id='displayName'
                label='Nombre a mostrar'
              />
            </Skeleton>
          </Grid>
        </Grid>
      </ContainerForm>
    )
  }
  return (
    <>
      <ContainerForm title='Perfil de usuario' onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete='given-name'
              name='displayName'
              fullWidth
              id='displayName'
              label='Nombre a mostrar'
              autoFocus
              value={displayName}
              onChange={onChange}
            />
          </Grid>
          <Grid item>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>
            {error && <Alert severity='error'>{error.message}</Alert>}
            {loader?.error && <Alert severity='error'>{loader.error}</Alert>}
            {loader?.isLoading && <Alert severity='info'>Subiendo...</Alert>}
          </Grid>
        </Grid>
        <button type='button' onClick={cleanUp}>Limpiar</button>
        {image}
        <img src={image} alt='' style={{ maxWidth: '50ch' }} />
        {/* <UploadWidget /> */}
      </ContainerForm>
      <input name='photoURL' type='file' onChange={handleFile} ref={inputFileRef} />
    </>
  )
}

// https://res.cloudinary.com/dimvf1zl2/image/upload/f_webp/v1688639315/images/mmhl5lczvgyf2cfzbpu2.gif
