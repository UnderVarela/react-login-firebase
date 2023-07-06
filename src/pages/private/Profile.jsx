import React, { useContext, useRef, useState } from 'react'
import { ContainerForm } from '../../layouts/ContainerForm'
import { UserContext } from '../../context/UserContext'
import { UploadWidget } from '../../components/ui/UploadWidget'
import { Alert, Button, Grid, Skeleton, TextField } from '@mui/material'

export function Profile () {
  const { displayName, onChange, _updateProfile, error, isLoading } = useContext(UserContext)
  const [image, setImage] = useState(null)
  const inputFileRef = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const formData = new FormData(target)
    const data = Object.fromEntries(formData.entries())
    _updateProfile(data)
  }

  const upload = async file => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'ngp3nkgu')
    formData.append('api_key', '153898983155635')
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dimvf1zl2/image/upload',
      {
        method: 'POST',
        body: formData
      }
    )
    const fileData = await response.json()
    console.log(fileData)
    const { url } = fileData
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
