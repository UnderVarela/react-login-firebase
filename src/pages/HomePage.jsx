import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { _getDocs } from '../helpers/firebase/cloud-firestore'

export function HomePage () {
  const { email } = useContext(UserContext)
  const [data, setData] = useState([])
  // console.log('ojoooo', _getDocs('prueba'))
  // setData(_getDocs('prueba')) --> mal porque se mete Promise<pending>

  useEffect(() => {
    _getDocs('prueba').then(datos => setData(datos))
  }, [])

  return (
    <>
      <h2 className='text-4xl'>Página home {email}</h2>
      {
        data.map(item => (
          <div key={item.id}>
            {item.nombre}
          </div>
        ))
      }
    </>
  )
}
