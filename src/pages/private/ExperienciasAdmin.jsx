import { ExperiencesForm } from './ExperiencesForm'
import { useCollection } from '../../hooks/useCollection'

export function ExperienciasAdmin () {
  const { isLoading, error, data: experiences, deleteData, addData } = useCollection('experiences')
  const handleDelete = idDoc => {
    deleteData(idDoc, 'experiences')
  }
  const handleAdd = async data => {
    console.log(data)
    await addData(data)
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
        <div className='w-full mt-2 mb-4 text-xs text-gray-700'>
          {
            experiences?.map(item => (
              <div className='px-4 py-2 transition-all duration-300 ease-in-out bg-white border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 last:border-none' key={item.idDoc}>
                <div className='font-bold'>{item?.titulo} </div>
                <div>{item?.descripcion} <button onClick={() => handleDelete(item.idDoc)}>Eliminar</button></div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
