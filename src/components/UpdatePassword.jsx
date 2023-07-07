import { ContainerForm } from '../layouts/ContainerForm'
import { Alert, Button, TextField } from '@mui/material'
import { useUser } from '../hooks/useUser'
import { auth } from '../helpers/firebase/firebase'

export function UpdatePassword () {
  const { error, isLoading, _updatePassword, setError } = useUser(auth)
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    try {
      if (data.password === data.passwordRepeat) _updatePassword(data.password)
      else throw new Error('Passwords no coincidentes')
    } catch (error) {
      setError(error)
    }
  }
  return (
    <ContainerForm title='Modificar Contraseña' onSubmit={handleSubmit}>
      <TextField
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoFocus
        sx={{ mb: 2 }}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        name='passwordRepeat'
        label='Repita password'
        type='password'
        id='repeat-password'
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
