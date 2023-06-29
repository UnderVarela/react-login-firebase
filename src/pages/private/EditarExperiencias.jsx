/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import { getDocument, updateDocument } from '../../helpers/firebase/cloud-firestore'
import { useEffect, useState } from 'react'

export function EditarExperiencias () {
  const { idDoc } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { titulo, descripcion } = data || false
  useEffect(
    () => {
      getDocument('experiences', idDoc)
        .then(datos => { setData(datos) })
        .catch(error => console.warn(error))
    },
    []
  )

  const guardarExperiencias = async data => {
    setDisabled(true)
    setIsLoading(true)
    try {
      await updateDocument(idDoc, 'experiences', data)
      navigate('/experiencias')
    } catch (error) {
      setError(error?.message)
    } finally {
      setDisabled(false)
      setIsLoading(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const data = Object.fromEntries(formdata.entries())
    guardarExperiencias(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label htmlFor='titulo'>Título</label>
        <input className='border' type='text' required name='titulo' defaultValue={titulo} />
      </div>
      <div className='field'>
        <label htmlFor='descripcion'>Descripción</label>
        <input className='border' type='text' name='descripcion' defaultValue={descripcion} />
      </div>
      <button disabled={disabled} className='bg-slate-500'>Guardar</button>
      {isLoading && 'Guardando..........'}
      {error && <div className='text-white bg-red-700'>{error}</div>}
    </form>

  )
}
