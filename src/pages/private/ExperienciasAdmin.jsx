import { ExperiencesForm } from './ExperiencesForm'
import { useCollection } from '../../hooks/useCollection'
import { ListItem } from '../../components'

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
    <>
      <h2 className='text-4xl text-center text-red-800'>Zona Administrativa</h2>
      <div className='flex items-start justify-center gap-5 p-5'>
        <fieldset>
          <ExperiencesForm onAddDocument={handleAdd} />
          {isLoading && 'Cargando...'}
          {error && error.message}
        </fieldset>
        <ul className='w-full mt-2 mb-4 text-xs text-gray-700'>
          {
            experiences?.map(({ idDoc, titulo, descripcion }) => (
              <ListItem key={idDoc}>
                <div className='font-bold'>{titulo} </div>
                <div>{descripcion} <button onClick={() => handleDelete(idDoc)}>Eliminar</button></div>
              </ListItem>
            ))
          }
        </ul>
      </div>
    </>
  )
}
