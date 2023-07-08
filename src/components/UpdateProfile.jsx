import { useState } from 'react'
import { Alert, Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import { ContainerForm } from '../layouts/ContainerForm'
import { useUser } from '../hooks/useUser'
import { auth } from '../helpers/firebase/firebase'
// import { UploadPhotoURL } from './UploadPhotoURL'
import { UploadWidget } from './ui/UploadWidget'

export function UpdateProfile () {
  const { displayName, photoURL, error, isLoading, onChange, _updateProfile, setUserFiels } = useUser(auth)
  const [checkedImage, setCheckedImage] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const formData = new FormData(target)
    const data = Object.fromEntries(formData.entries())
    // console.log(data)
    _updateProfile(data)
  }

  return (
    <ContainerForm title='Perfil de usuario' onSubmit={handleSubmit}>
      <TextField
        autoComplete='given-name'
        name='displayName'
        fullWidth
        id='displayName'
        label='Nombre a mostrar'
        autoFocus
        value={displayName}
        onChange={onChange}
        sx={{ mb: 2 }}
      />
      <FormGroup>
        <FormControlLabel sx={{ mb: 2 }} control={<Checkbox checked={checkedImage} onChange={() => setCheckedImage(!checkedImage)} />} label='URL de tu avatar' />
        <TextField
          sx={{ mb: 2 }}
          autoComplete='given-name'
          name='photoURL'
          fullWidth
          id='photoURL'
          label='URL de la foto'
          autoFocus
          value={photoURL}
          onChange={onChange}
          disabled={!checkedImage}
        />
        {/* <UploadPhotoURL _updateProfile={_updateProfile} setUserFiels={setUserFiels} /> */}
        <Box sx={{ display: 'grid', gap: '5px' }}>
          <UploadWidget _updateProfile={_updateProfile} setUserFiels={setUserFiels} />
          {photoURL && <Avatar sx={{ justifySelf: 'center', width: 128, height: 128 }} alt='Imagen de perfil' src={photoURL} />}
        </Box>
      </FormGroup>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
      >
        Enviar
      </Button>
      {error && <Alert severity='error'>{error.message}</Alert>}
      {isLoading && <Alert severity='info'>Guardando...</Alert>}
    </ContainerForm>
  )
}
