import { Alert, Box, List, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { ListItem } from '../components/ListItem'
import { useCollection } from '../hooks/useCollection'
import { ArrowCircleRight } from '@mui/icons-material'

export function HomePage () {
  const { isLoading, error, data: experiences } = useCollection('experiences', 'titulo')

  return (
    <>
      <Box sx={{ padding: 5 }}>
        <Typography component='h1' variant='h3' textAlign='center'>Home</Typography>
        <List>
          {
            experiences?.map(({ idDoc, titulo, descripcion }) => (
              <ListItem key={idDoc} divider>
                <ListItemIcon>
                  <ArrowCircleRight />
                </ListItemIcon>
                <ListItemText primary={titulo} secondary={descripcion} />
              </ListItem>
            ))
          }
        </List>
        {error && <Alert severity='error'>{error?.message}</Alert>}
        {isLoading && <Alert severity='info'>Cargando....</Alert>}
      </Box>
    </>
  )
}
