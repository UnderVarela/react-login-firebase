import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { deleteDocument, getDocuments } from '../helpers/firebase/cloud-firestore'
import { Link } from 'react-router-dom'

export function HomePage () {
  const { email } = useContext(UserContext)
  const [data, setData] = useState([])
  // console.log('ojoooo', _getDocs('prueba'))
  // setData(_getDocs('prueba')) --> mal porque se mete Promise<pending>

  useEffect(() => {
    getDocuments('prueba').then(datos => setData(datos))
  }, [])

  const deletePrueba = async (idDoc) => {
    try {
      await deleteDocument('prueba', idDoc)
      const tmp = data.filter(function(item) {
        if (item.idDoc !== idDoc) return item
      })
      setData(tmp)
    } catch (error) {
      console.log('NOOOOOOOOOOOOOOOOO', error)
    }
  }

  const handleDelete = idDoc => {
    if (!confirm(`Confirma que desea eliminar el documento ${idDoc}`)) return
    deletePrueba(idDoc)
  }

  return (
    <>
      <h2 className='text-4xl'>Página home {email}</h2>
      {
        data.map(item => (
          <div key={item.idDoc} className='border border-red-600'>
            <div>{item?.titulo} <button onClick={() => handleDelete(item.idDoc)}>Eliminar</button></div>
            <div>{item?.descripcion}</div>
            <div>{item?.jaja}</div>
            <Link to={`/experiencias/${item.idDoc}`}>Editar Experiencia</Link>
          </div>
        ))
      }
    </>
  )
}
