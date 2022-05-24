import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import Img from '../imagenes/carrito.png'

const CartWidget = () => {
  const cartContext=useContext(CartContext)
  const{cart}=cartContext
  return (
    <>
    <Link to='/Cart'>
 
    <img  src={Img} alt='imagen' width={80}/>
    </Link>
    <span>{cart.length}</span>
    </>
  )
}

export default CartWidget