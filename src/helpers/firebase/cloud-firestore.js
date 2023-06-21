import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'

export async function _getDocs (_collection) {
  const tmp = []

  const querySnapshot = await getDocs(collection(db, _collection))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data())
    tmp.push({
      id: doc.id,
      ...doc.data()
    })
  })
  console.log(tmp)
  return tmp
}
