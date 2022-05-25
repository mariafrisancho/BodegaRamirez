import { useCartContext } from "../../Context/CartContext"


 const Cart = () => {
 const {carList,vaciarCarrito}=useCartContext()

  return (
    <div>
     {carList.map(product=><li>{product.nombre}-precio: {product.precio}-cantidad:{product.cantidad}</li>)}
     <button onClick={vaciarCarrito}>Vaciar Carrito</button> 
      </div>
  )
}
export default Cart