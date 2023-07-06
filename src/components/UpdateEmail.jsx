import { useRef } from 'react'
import { ContainerForm } from '../layouts/ContainerForm'
import { Alert, Button, TextField } from '@mui/material'
import { useUser } from '../hooks/useUser'
import { auth } from '../helpers/firebase/firebase'

export function UpdateEmail () {
  const emailRef = useRef()
  const { email, error, isLoading, onChange, _updateEmail } = useUser(auth)
  const handleSubmit = e => {
    e.preventDefault()
    _updateEmail(email)
  }
  return (
    <ContainerForm title='Modificar Correo electrónico' onSubmit={handleSubmit}>
      <TextField
        margin='normal'
        required
        type='email'
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        ref={emailRef}
        autoComplete='email'
        autoFocus
        placeholder='homegoma@gmail.com'
        value={email}
        onChange={onChange}
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
        disabled={isLoading}
      >
        Actualizar
      </Button>
      {error && <Alert severity='error'>{error.message}</Alert>}
      {isLoading && <Alert severity='info'>Guardando...</Alert>}
    </ContainerForm>
  )
}
