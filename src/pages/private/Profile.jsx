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

  const cleanUp = () => {
    URL.revokeObjectURL(image)
    setImage(null)
  }

  const handleChange = e => {

    // const newImage = e.target.files[0]
    // if (newImage) {
    //   setImage(URL.createObjectURL(newImage))
    // }
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
      {/* <input name='photoURL' type='file' onChange={handleChange} ref={inputFileRef} /> */}
      <button type='button' onClick={cleanUp}>Limpiar</button>
      {image}
      <img src={image} alt='' />
      {inputFileRef.current?.value}
      {/* <UploadWidget /> */}
    </ContainerForm>
  )
}
