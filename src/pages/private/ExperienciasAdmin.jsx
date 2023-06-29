import { ExperiencesForm } from './ExperiencesForm'
import { useCollection } from '../../hooks/useCollection'
import { Alert, Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ArrowCircleRight } from '@mui/icons-material'

export function ExperienciasAdmin () {
  const { isLoading, error, data: experiences, addData } = useCollection('experiences', 'titulo')

  const handleAdd = data => {
    // console.log(data)
    addData(data)
  }

  return (
    <Box sx={{ padding: 5 }}>
      <Typography component='h1' variant='h3' textAlign='center'>Experiencias</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ExperiencesForm onAddDocument={handleAdd} />
          {isLoading && <Alert severity='warning'>Cargando...</Alert>}
          {error && <Alert severity='error'>{error.message}</Alert>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <List>
            {
            experiences?.map(({ idDoc, titulo, descripcion }) => (
              <ListItem key={idDoc} divider>
                <ListItemButton component={Link} to={`/experiencias/${idDoc}`}>
                  <ListItemIcon>
                    <ArrowCircleRight />
                  </ListItemIcon>
                  <ListItemText primary={titulo} secondary={descripcion} />
                </ListItemButton>
              </ListItem>
            ))
          }
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}
