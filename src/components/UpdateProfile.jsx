import { Alert, Avatar, Button, Checkbox, FormControlLabel, FormGroup, Stack, TextField } from '@mui/material'
import { ContainerForm } from '../layouts/ContainerForm'
import { useUser } from '../hooks/useUser'
import { auth } from '../helpers/firebase/firebase'
import { useRef, useState } from 'react'

export function UpdateProfile () {
  const { displayName, photoURL, error, isLoading, onChange, _updateProfile, setUserFiels } = useUser(auth)
  const [image, setImage] = useState(null)
  const [checkedImage, setCheckedImage] = useState(false)
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
    const data = Object.fromEntries(formData.entries())
    // console.log(data)
    _updateProfile(data)
  }

  const cleanUp = () => {
    URL.revokeObjectURL(image)
    inputFileRef.current.value = ''
    setImage(null)
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
      // if (cloudinaryURLRef.current) data.photoURL = cloudinaryURLRef.current
      const profileFormData = new FormData()
      profileFormData.append('photoURL', fileData.url)
      const data = Object.fromEntries(profileFormData.entries())
      _updateProfile(data)
      setUserFiels({ photoURL: fileData.url })
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
  const handleFile = ({ target }) => {
    const newImage = target.files[0]
    if (newImage) {
      setImage(URL.createObjectURL(newImage))
      upload(newImage)
    } else cleanUp()
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
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={0.5}
        >
          <input type='file' onChange={handleFile} ref={inputFileRef} />
          <Button type='button' onClick={cleanUp}>Limpiar </Button>

        </Stack>
        {image && <Avatar alt={displayName} src={image} />}
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
      {loader?.error && <Alert severity='error'>{loader.error}</Alert>}
      {loader?.isLoading && <Alert severity='info'>Subiendo...</Alert>}
    </ContainerForm>
  )
}
