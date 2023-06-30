/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContainerForm } from '../../layouts/ContainerForm'
import { Alert, Box, Button, FormControlLabel, Grid, Skeleton, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { useCollection } from '../../hooks/useCollection'

export function ExperienceEdit () {
  const { idDoc } = useParams()
  const { getData, updateData, data, error, isLoading, onChange, deleteData } = useCollection()
  const { titulo = '', descripcion = '' } = data || false
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()

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
  }

  const handleDelete = async () => {
    if (!isChecked) return
    await deleteData(idDoc, 'experiences')
    if (!error) navigate('/experiencias')
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
      <Grid component='fieldset' sx={{ p: 2, border: '1px dashed grey' }}>
        <FormControlLabel control={<Checkbox checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />} label='Eliminar la experiencia' />

        <Button
          type='button'
          fullWidth
          variant='contained'
          color='error'
          onClick={handleDelete}
          disabled={!isChecked}
        >
          Eliminar
        </Button>
      </Grid>
      {error && <Alert severity='error' sx={{ mt: 3, mb: 2 }}>{error?.message}</Alert>}
    </ContainerForm>

  )
}
