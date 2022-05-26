import { useCartContext } from "../../Context/CartContext"


 const Cart = () => {
 const {carList,vaciarCarrito,precioTotal,EliminarItem, cantidadTotal}=useCartContext()

  return (
    <div>
     {carList.map(product=><div key={product.id}>
                            <li>
                              {product.nombre} - precio: {product.precio} -cantidad: {product.cantidad}
                            </li>
                            <button className="btn btn--outline-primary" onClick={()=>EliminarItem(product.id)}>X</button>

                             </div>)}
                       
     <h2>El Precio Total= {precioTotal()} </h2>
     <h2>El Cantidad Total= {cantidadTotal()} </h2>
     <button onClick={vaciarCarrito}>Vaciar Carrito</button> 
      </div>
  )
}
export default Cart