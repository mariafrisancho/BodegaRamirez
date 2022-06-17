import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import traerDatosFirestore from '../Funciones/traerDatosFirestore'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const[loading,setloading]=useState(true)
  const { detalleId } = useParams()

  useEffect(()=>{
  traerDatosFirestore(-1,detalleId,1)
    .then(respuesta=>setProducto({id: respuesta.id, ...respuesta.data()}))
    .catch((err) => console.log(err))
    .finally(()=>setloading(false))

  },[])



 

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

