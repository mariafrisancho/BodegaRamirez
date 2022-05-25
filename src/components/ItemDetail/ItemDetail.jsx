import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../../Context/CartContext';

import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const Terminar= ()=> {

  return (
      <>
      <Link to='/cart' >
          <button 
              className="btn btn-outline-primary" 
              onClick={()=>console.log('ir a cart') } 
          >Terminar compra</button>
      </Link>
      <Link to='/' >
          <button 
              className="btn btn-outline-primary" 
              onClick={()=>console.log('ir al home') } 
          >Seguir comprando</button>
      </Link>
      </>
  )
}



const ItemDetail = ({producto}) => {

const[count,setCount]=useState(0)

const{addToCart}=useCartContext()


const onAdd=(cant)=>{
  console.log(cant)
  addToCart({...producto,cantidad:cant})
  setCount(cant)
}

 
  return (
    <>
  
    <div className="container-fluid margen">
     <div className='row align-items-start'>
      <div className='col'>
        <img className='img-thumbnai' src={producto.img} width="300"  />
      </div>
      <div className='col'>
        <h1>{producto.nombre}</h1>
        <h2>{producto.descripcion}</h2>
        <h3>PRECIO: s./ {producto.precio} </h3>

 

      {
        count==0?
   
   
       <ItemCount 
         inicial={1}
         stock={producto.cantidad}
         onAdd ={onAdd}/> 
       
        :
      <Terminar/> 
      
        }
                    
      </div>
 
         
    </div>

   
    </div>
    </>
  )
}

export default ItemDetail