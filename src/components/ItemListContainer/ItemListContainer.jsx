import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'



const productos = [
  {
    id: 1,
    nombre: "VINO SECO",
    descripcion: "VARIEDAD NEGRA CRIOLLA 12 ° GRADO ALCOHOLICO",
    precio: 50,
    categoria: "VINOS",
    img:"/media/vinoseco.jpg",
    cantidad: 1
  },
  {
    id: 2,
    nombre: "VINO SEMISECO",
    descripcion: "BLEND 60% NEGRA CRIOLLA , 40% MOSCATEL",
    precio: 50,
    categoria: "VINOS",
    img: "/media/vinosemiseco.jpg",
    cantidad: 1
  },
  {
    id: 3,
    nombre: "VINO DULCE",
    descripcion: "VARIEDAD MOSCATEL 12° GRADO ALCOHOLICO",
    precio: 50,
    categoria: "VINOS",
    img: "/media/vinodulce.jpg",
    cantidad: 1
  },
  {
    id: 4,
    nombre: "PISCO NEGRA CRIOLLA",
    descripcion: "VARIEDAD NEGRA CRIOLLA 42 ° GRADO ALCOHOLICO",
    precio: 50,
    categoria: "PISCO",
    img: "/media/pisconegracriolla.jpg",
    cantidad: 1
  },
  {
    id: 5,
    nombre: "PISCO MOSCATEL",
    descripcion: "VARIEDAD MOSCATEL 42 ° GRADO ALCOHOLICO",
    precio: 50,
    categoria: "PISCO",
    img: "/media/piscomoscatel.jpg",
    cantidad: 1
  },
  {
    id: 6,
    nombre: "PISCO ACHOLADO",
    descripcion: "PISCO UVA MOSCATEL Y  UVA NEGRA CRIOLLA 42 ° GRADO ALCOHOLICO",
    precio: 50, "categoria": "Destilado",
    img: '/media/piscoacholado.jpg',
    cantidad: 1
  }]

const getFech = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos)
  }, 3000)


})

export const ItemListContainer = ({ saludo = 'saludo' }) => {
  const [productos, setProductos] = useState([])


  useEffect(() => {
    getFech
      .then(respuesta => setProductos(respuesta))
      .catch((err) => console.log(err))

  },[])

  return (
    <div>
      <main>
        <h1>  {saludo}      </h1>


       <ItemList products={productos} /> 
   

      </main>





    </div>
  )
}
