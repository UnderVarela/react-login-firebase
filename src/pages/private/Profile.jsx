import { Grid } from '@mui/material'
import { UpdateEmail, UpdatePassword, UpdateProfile } from '../../components'

export function Profile () {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4}>
        <UpdateProfile />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <UpdateEmail />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <UpdatePassword />
      </Grid>
    </Grid>
  )
}
