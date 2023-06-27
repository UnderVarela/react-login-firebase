import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import { useContext, useRef } from 'react'
import { UserContext } from '../context/UserContext'

export function LoginUI () {
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
    <>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          </Box>
        </Box>
        {error && <Typography color='red' component='strong' variant='h6'>{error?.message}</Typography>}
      </Container>
    </>
  )
}
