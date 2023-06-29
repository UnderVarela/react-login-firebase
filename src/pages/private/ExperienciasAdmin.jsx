import { ExperiencesForm } from './ExperiencesForm'
import { useCollection } from '../../hooks/useCollection'
import { ListItem } from '../../components'
import { Alert, Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


export function ExperienciasAdmin () {
  const { isLoading, error, data: experiences, deleteData, addData } = useCollection('experiences')
  const handleDelete = idDoc => {
    deleteData(idDoc, 'experiences')
  }
  const handleAdd = data => {
    console.log(data)
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
          <ul className='mt-2 mb-4 text-xs text-gray-700'>
            {
            experiences?.map(({ idDoc, titulo, descripcion }) => (
              <ListItem key={idDoc}>
                <div className='font-bold'>{titulo} </div>
                <div>
                  {descripcion}
                  <button onClick={() => handleDelete(idDoc)}>Eliminar</button>
                  <Link to={`/experiencias/${idDoc}`}>Editar</Link>
                </div>
              </ListItem>
            ))
          }
          </ul>
        </Grid>
      </Grid>
    </Box>
  )
}
