import { Container } from '@mui/material'
import { UpdateEmail, UpdatePassword, UpdateProfile } from '../../components'

export function Profile () {
  return (
    <Container component='main' maxWidth='lg'>
      <UpdateProfile />
      <UpdateEmail />
      <UpdatePassword />
    </Container>
  )
}
