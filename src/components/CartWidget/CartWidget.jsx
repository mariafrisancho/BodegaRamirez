
import { Link } from 'react-router-dom'


import Img from '../imagenes/carrito.png'

const CartWidget = () => {



  return (
    <>
    <Link to='/Cart'>
 
    <img  src={Img} alt='imagen' width={80}/>
    </Link>
 

    </>
  )
}

export default CartWidget