import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import"../Item/Item.css"

export const Item = ({ product }) => {
  const {addToCart}= useCartContext()

  const onAdd = (cant) => {
    addToCart({ ...product, cantidad: cant, subtotal: 0 })
    setCount(cant)
  }

  return (
  
    <div
      className='col-md-4'
    >

      <div className="card w-100 mt-5" >
        <div className="card-header textoTitulo">
          {` ${product.categoria} -${product.nombre}`}
        </div>
        <Link to={`/detalle/${product.id}`}>
        <div className="card-body">
          <img src={product.img} alt='' className='w-50' />
          <div className="colorPrecio">
           Precio  S./: {product.precio}
          </div>
        
        </div>
        </Link> 

        <div className="card-footer">
      
      <ItemCount
      inicial={1}
      stock={product.stock}
      onAdd={onAdd}
            />

        </div>
      </div>

    </div>
   

  )
}

