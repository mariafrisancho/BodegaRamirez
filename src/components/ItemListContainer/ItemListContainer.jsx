import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'


export const ItemListContainer = ({ saludo = 'saludo' }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()

    if (id) {
      const queryCollection = collection(db, 'productos')
      const queryCollectionFilter = query(queryCollection, where('categoria', '==', id))
      getDocs(queryCollectionFilter)
        .then(respuesta => setProductos(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

    } else {
      const queryCollection = collection(db, 'productos')
      getDocs(queryCollection)
        .then(respuesta => setProductos(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

    }

  }, [id])





  return (
    <div>
      <main>
        <h1>  {saludo}      </h1>


        {loading ?
          <h2>Cargando...</h2>
          :
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <ItemList products={productos} />
          </div>


        }





      </main>





    </div>
  )
}
