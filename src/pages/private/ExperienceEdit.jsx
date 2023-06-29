/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContainerForm } from '../../layouts/ContainerForm'
import { useCollection } from '../../hooks/useCollection'
import { Alert, Box, Button, Grid, Skeleton, TextField } from '@mui/material'

export function ExperienceEdit () {
  const { idDoc } = useParams()
  const { getData, updateData, data, error, isLoading, onChange } = useCollection()
  const navigate = useNavigate()
  const { titulo = '', descripcion = '' } = data || false

  useEffect(
    () => {
      getData('experiences', idDoc)
    },
    []
  )

  const handleSubmit = e => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const data = Object.fromEntries(formdata.entries())
    updateData('experiences', idDoc, data)
    if (!error && !isLoading) navigate('/experiencias')
  }

  if (isLoading) {
    return (
      <ContainerForm title='Actualización de experiencia' onSubmit={() => {}}>
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
        </Grid>
        <Box sx={{ width: 'auto' }}>
          <Skeleton animation='wave' height={70} />
        </Box>
      </ContainerForm>
    )
  }

  return (
    <ContainerForm title='Actualización de experiencia' onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name='titulo'
            required
            fullWidth
            id='titulo'
            label='Título'
            value={titulo}
            onChange={onChange}
            placeholder='Su texto'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name='descripcion'
            placeholder='Su texto'
            fullWidth
            id='descripcion'
            label='Descripción'
            onChange={onChange}
            value={descripcion}
          />
        </Grid>

      </Grid>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        disabled={isLoading}
        sx={{ mt: 3, mb: 2 }}
      >
        Enviar
      </Button>
      {isLoading && <Alert severity='info'>Guardando...</Alert>}
      {error && <Alert severity='error'>{error?.message}</Alert>}
    </ContainerForm>

  )
}
