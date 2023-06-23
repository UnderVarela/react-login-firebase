import { useNavigate } from 'react-router-dom'
import { addDocument } from '../helpers/firebase/cloud-firestore'
import { useState } from 'react'


export function ExperienciasForm () {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const insertData = async (data) => {
    setError(null)
    setIsLoading(true)
    try {
      if (!data.titulo.length) throw new Error('El campo titulo no puede estar vacío')
      await addDocument('misexperiencias', data)
      navigate('/')
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleSubmit = (evento) => {
    evento.preventDefault()
    const formData = new FormData(evento.target)
    // console.log(formData.get('titulo'))
    const data = Object.fromEntries(formData.entries())
    insertData(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='campo'>
        <label htmlFor='titulo'>
          Título
        </label>
        <input
          className='border'
          type='text'
          id='titulo'
          name='titulo'
        />
      </div>
      <div className='campo'>
        <label htmlFor='descripcion'>
          Descripción
        </label>
        <input
          className='border'
          type='text'
          id='descripcion'
          name='descripcion'
        />
      </div>
      <button
        disabled={isLoading}
       className='border'
      >Enviar
      </button>
      {error?.message}
      {isLoading && 'Cargando...........'}
    </form>
  )
}
