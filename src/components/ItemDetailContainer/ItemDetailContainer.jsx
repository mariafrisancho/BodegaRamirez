import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getFetch from '../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const[loading,setloading]=useState(true)
  const { detalleId } = useParams()


  useEffect(() => {
    getFetch(detalleId)
      .then(respuesta => setProducto(respuesta))
      .catch((err) => console.log(err))
      .finally(()=>setloading(false))
  }, [])
 

  return (
    <div>
      { loading ?
      <h2>Cargando...</h2>
      :
      <ItemDetail producto={producto} />  

      }
     
      
    </div>
  )
}

export default ItemDetailContainer

