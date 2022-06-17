import { getFirestore, collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore'

const traerDatosFirestore = (id, detalleId, obtner) => {
  const db = getFirestore()

  return new Promise((resolve) => {
    setTimeout(() => {
      if (obtner == 0) {
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = id ? query(queryCollection, where('categoria', '==', id)) : queryCollection
        const data = getDocs(queryCollectionFilter)
        resolve(data)
      }
      else {
        const dbQuery = doc(db, 'productos', detalleId)
        const data = getDoc(dbQuery)
        resolve(data)

      }



    }, 3000)

  }

  )

}
export default traerDatosFirestore



