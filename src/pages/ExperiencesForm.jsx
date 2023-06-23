import { useNavigate } from 'react-router-dom'
import { addDocument } from '../helpers/firebase/cloud-firestore'

async function guardarDatos (data) {
  await addDocument('prueba', data)
}

export function ExperiencesForm () {
 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target) // Almacena todos los controles de formulario que tengan name
    // console.log(formData.get('titulo'))
    const entradas = formData.entries()
    const obj = Object.fromEntries(entradas)
    guardarDatos(obj) // añadir datos a firestore
    navigate('/')
    // console.log(entradas)
    // document.querySelector('#titulo').value
    // refTitulo.current.value
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className='block' htmlFor='titulo'>Título</label>
      <input className='border' type='text' required name='titulo' id='titulo' />
      <input className='block border' type='text' required name='descripcion' placeholder='Su descripción' />
      <button className='p-2 text-white bg-black'>Enviar</button>
    </form>
  )
}
