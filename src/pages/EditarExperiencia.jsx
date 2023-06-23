/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import { getDocument } from '../helpers/firebase/cloud-firestore'
import { useState, useEffect } from 'react'

export function EditarExperiencia () {
  const [experiencia, setExperiencia] = useState({})
  const parametros = useParams()
  const { experienciaId } = parametros
  useEffect(() => {
    getDocument('prueba', experienciaId).then(data => setExperiencia(data))
  }, [])
  return (
    <div>
      Experiencia
      {JSON.stringify(experiencia, null, 3)}
    </div>
  )
}
