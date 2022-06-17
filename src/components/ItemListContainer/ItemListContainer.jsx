import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import traerDatosFirestore from '../Funciones/traerDatosFirestore'

import './ItemListContainer.css'

export const ItemListContainer = ({ saludo = 'saludo' }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
   traerDatosFirestore(id,1,0)
      .then(respuesta => setProductos(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))

  },[id]  )


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
