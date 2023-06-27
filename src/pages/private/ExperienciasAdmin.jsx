import React, { useEffect, useState } from 'react'
import { getDocuments } from '../../helpers/firebase/cloud-firestore'

export function ExperienciasAdmin () {
  const [expereriences, setExpereriences] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getDocuments('prueba')
      .then((algo) => {
        if (!algo.length) throw new Error('No hay datos')
        setExpereriences(algo)
      })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <h2 className='text-4xl text-center text-red-800'>Zona Administrativa</h2>
      {isLoading && 'Cargando...'}
      {/* {!expereriences.length && 'No ha datos'} */}
      {error && error.message}
      <div className='mt-2 mb-4 text-xs text-gray-700'>
        {
          expereriences?.map(item => (
            <div className='px-4 py-2 transition-all duration-300 ease-in-out bg-white border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 last:border-none' key={item.idDoc}>
              <div className='font-bold'>{item?.titulo} </div>
              <div>{item?.descripcion}</div>
            </div>
          ))
        }
      </div>
    </>
  )
}
