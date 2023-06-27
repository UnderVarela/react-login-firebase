import { useCollection } from '../hooks/useCollection'

export function HomePage () {
  const { isLoading, error, data: experiences } = useCollection('experiences')

  return (
    <>
      <h2 className='text-4xl'>Página home</h2>
      {isLoading && 'Cargando...'}
      {error && error.message}
      <div className='mt-2 mb-4 text-xs text-gray-700'>
        {
          experiences?.map(({ idDoc, titulo, descripcion }) => (
            <div className='px-4 py-2 transition-all duration-300 ease-in-out bg-white border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 last:border-none' key={idDoc}>
              <div className='font-bold'>{titulo} </div>
              <div>{descripcion}</div>
            </div>
          ))
        }
      </div>
    </>
  )
}
