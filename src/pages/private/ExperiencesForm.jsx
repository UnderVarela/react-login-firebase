import { ContainerForm } from '../../layouts/ContainerForm'
import { Button, Grid, TextField } from '@mui/material'
import PropTypes from 'prop-types'

export function ExperiencesForm ({ onAddDocument }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target) // Almacena todos los controles de formulario que tengan name
    // console.log(formData.get('titulo'))
    const entradas = formData.entries()
    const obj = Object.fromEntries(entradas)// añadir datos a firestore
    onAddDocument(obj)
  }
  return (
    <ContainerForm onSubmit={handleSubmit} title='Nueva experiencia' typography={{ component: 'strong', variant: '' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete='given-name'
            name='titulo'
            required
            fullWidth
            id='titulo'
            label='Título'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete='given-name'
            name='descripcion'
            fullWidth
            id='descripcion'
            label='Descripción'
          />
        </Grid>

      </Grid>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
      >
        Enviar
      </Button>
    </ContainerForm>

  )
}

ExperiencesForm.propTypes = {
  onAddDocument: PropTypes.func
}
