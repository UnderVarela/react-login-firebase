import { CustomButton } from '../../components'
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
    <form onSubmit={handleSubmit}>
      <ul className='grid gap-2'>
        <li>
          <label className='block' htmlFor='titulo'>Título</label>
          <input className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500' type='text' required name='titulo' id='titulo' />
        </li>
        <li>
          <label className='block' htmlFor='descripcion'>Descripción</label>
          <input className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500' type='text' id='descripcion' required name='descripcion' placeholder='Su descripción' />
        </li>
        <li>
          <CustomButton>Crear</CustomButton>
        </li>
      </ul>
    </form>
  )
}

ExperiencesForm.propTypes = {
  onAddDocument: PropTypes.func
}
