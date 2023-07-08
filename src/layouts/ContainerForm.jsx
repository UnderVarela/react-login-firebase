import { Box, Container, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export function ContainerForm ({ children, title, onSubmit, typography = { component: 'h1', variant: 'h5' } }) {
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8
        }}
      >
        <Typography component={typography.component} variant={typography.variant}>
          {title}
        </Typography>
        <Box component='form' onSubmit={onSubmit} sx={{ mt: 1 }}>
          {children}
        </Box>
      </Box>
    </Container>
  )
}

ContainerForm.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  typography: PropTypes.object
}
