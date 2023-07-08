import { Box, Button, TextField, Typography } from '@mui/material'
import { useContext, useRef } from 'react'
import { UserContext } from '../context/UserContext'
import { ContainerForm } from '../layouts/ContainerForm'

export function LoginPage () {
  const { _signInWithEmailAndPassword, error, isLoading } = useContext(UserContext)
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target) // Almacena todos los controles de formulario que tengan name
    // console.log(formData.get('titulo'))
    const entradas = formData.entries()
    const { email, password } = Object.fromEntries(entradas)// añadir datos a firestore
    console.log(email, password)
    // Envio los datos a papá
    _signInWithEmailAndPassword(email, password)
  }
  return (
    <Box maxWidth='xs'>
      <ContainerForm title='Sign In' onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          ref={emailRef}
          autoComplete='email'
          autoFocus
          placeholder='homegoma@gmail.com'
        />
        <TextField
          margin='normal'
          required
          fullWidth
          ref={passwordRef}
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
          disabled={isLoading}
        >
          Sign In
        </Button>

        {error && <Typography color='red' component='strong' variant='h6'>{error?.message}</Typography>}
      </ContainerForm>
    </Box>
  )
}
