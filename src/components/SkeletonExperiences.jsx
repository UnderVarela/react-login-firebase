import { ContainerForm } from '../layouts/ContainerForm'
import { Grid, Skeleton, TextField, Box } from '@mui/material'
import PropTypes from 'prop-types'

export function SkeletonExperiences ({ title = 'Actualización de experiencia' }) {
  return (
    <ContainerForm title={title} onSubmit={() => {}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Skeleton variant='rounded'>
            <TextField />
          </Skeleton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant='rounded'>
            <TextField />
          </Skeleton>
        </Grid>
      </Grid>,
      <Box sx={{ width: 'auto' }}>
        <Skeleton animation='wave' height={70} />
      </Box>
    </ContainerForm>
  )
}

SkeletonExperiences.propTypes = {
  title: PropTypes.string
}
