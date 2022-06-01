import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

import ItemDetail from '../ItemDetail/ItemDetail'
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const[loading,setloading]=useState(true)
  const { detalleId } = useParams()

  useEffect(()=>{
    const db=getFirestore()
    const dbQuery=doc(db,'productos', detalleId)
    getDoc(dbQuery)
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

