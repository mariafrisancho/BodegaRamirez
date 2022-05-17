import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getFetch from '../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { detalleId } = useParams()


  useEffect(() => {
    getFetch(detalleId)
      .then(respuesta => setProducto(respuesta))
      .catch((err) => console.log(err))
  }, [])
  console.log(detalleId)
  console.log(producto)

  return (
    <div>
     
       <ItemDetail producto={producto} />  
    </div>
  )
}

export default ItemDetailContainer

