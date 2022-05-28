import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom";

const ComprarProductos = () => {

  return (
    <>
    <br/>
    <h2> No hay items en su carrito</h2>
      <Link to='/' >
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log('ir al home')}
        >Seguir comprando</button>
      </Link>
    </>
  )
}





const Cart = () => {
  const { carList, vaciarCarrito, precioTotal, EliminarItem, } = useCartContext()

  return (
    <>
    {
      precioTotal() !== 0 &&  <h2> Pedido</h2>
    }
  
    <div>
      {carList.map(product => <div key={product.id} >
        <span> {product.nombre} </span>
        <span className="badge bg-warning text-dark"> precio: {product.precio}</span>
        <span className="badge bg-primary"> Cantidad: {product.cantidad}</span>
        <span className="badge bg-dark"> Subtotal: {product.subtotal} </span>
        <button className="btn btn-info btn-delete" onClick={() => EliminarItem(product.id)}>X</button>

      </div>)}

     

    </div>
    <div>
    {
        precioTotal() !== 0 && <h2 className="badge bg-dark">El Precio Total es= {precioTotal()} </h2>
      }
    </div>
 
    <div>
    {
        precioTotal() !== 0 ?
        
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
     
          :
          <ComprarProductos />


      }

    </div>
    </>
  )
}
export default Cart