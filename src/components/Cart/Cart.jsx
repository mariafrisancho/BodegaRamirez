import { useCartContext } from "../../Context/CartContext"


 const Cart = () => {
 const {carList,vaciarCarrito,precioTotal,EliminarItem, }=useCartContext()

  return (
    <div>
     {carList.map(product=><div key={product.id} >
                        <span> {product.nombre} </span>
                         <span className="badge bg-warning text-dark"> precio: {product.precio}</span>
                         <span className="badge bg-primary"> Cantidad: {product.cantidad}</span>
                         <button className="btn btn-info btn-delete" onClick={()=>EliminarItem(product.id)}>X</button>

                             </div>)}
                       
     <h2 className="badge bg-dark">El Precio Total es= {precioTotal()} </h2>
     <br/>
       <button onClick={vaciarCarrito}>Vaciar Carrito</button> 
      </div>
  )
}
export default Cart