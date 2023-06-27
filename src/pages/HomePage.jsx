import { ListItem } from '../components/ListItem'
import { useCollection } from '../hooks/useCollection'

export function HomePage () {
  const { isLoading, error, data: experiences } = useCollection('experiences')

  return (
    <>
      <h2 className='text-4xl'>Página home</h2>
      {isLoading && 'Cargando...'}
      {error && error.message}
      <ul className='mt-2 mb-4 text-xs text-gray-700'>
        {
          experiences?.map(({ idDoc, titulo, descripcion }) => (
            <ListItem key={idDoc}>
              <div className='font-bold'>{titulo} </div>
              <div>{descripcion}</div>
            </ListItem>
          ))
        }
      </ul>
    </>
  )
}
