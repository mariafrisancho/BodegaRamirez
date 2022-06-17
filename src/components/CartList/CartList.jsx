import { useCartContext } from "../../Context/CartContext"
import CartForm from "../CartForm/CartForm"
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import '../CartList/CartList.css'
import ReturnMain from "../ReturnMain/ReturnMain"



const CartList = ({ listaproductos }) => {
  const { vaciarCarrito, precioTotal, EliminarItem, } = useCartContext()
  let orden = {}


  async function generarOrden(dataForm) {
    orden.buyer = dataForm
    orden.date = Date.now()
    orden.total = precioTotal()
    orden.items = listaproductos.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.nombre
      const precio = cartItem.precio
      const cantidad = cartItem.cantidad

      return { id, nombre, precio, cantidad }

    })
    const db = getFirestore()
    const querycollection = collection(db, 'orders')
    addDoc(querycollection, orden)
      .then((respuesta) => {
        alert("Muchas gracias por su compra, nos comunicaremos con usted pronto  su orden es :" + respuesta.id)
        clear()
        Navigate("/")
      }

      )
      .catch(error => console.log(error))
      .finally(() => vaciarCarrito())

    //Actualizar stock
    const queryCollecctionStock = collection(db, 'productos')
    const queryActualizarStock = query(
      queryCollecctionStock,
      where(documentId(), 'in', listaproductos.map(it => it.id))
    )
    const batch = writeBatch(db)
    await getDocs(queryActualizarStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - listaproductos.find(item => item.id == res.id).cantidad
      })))
      .finally(() => console.log('Actualizado'))
    batch.commit()

  }


  return (

    <>



      <div className="principal">



        <div className="margenDiv">
          {
            listaproductos.length !== 0 && <h3> Productos seleccionados</h3>


          }

          {

            listaproductos.map(product => <div key={product.id}   >
              <li >
                <img src={product.img} style={{ width: 70 }} />
                {product.nombre} - Precio :  {product.precio} - Cantidad : {product.cantidad} ---
                <button className="btn btn-info btn-delete" onClick={() => EliminarItem(product.id)}>X</button>
              </li>

            </div>)}


          {
            listaproductos.length !== 0 && <>
              <button className="btn btn-primary btn-sm" onClick={vaciarCarrito}>Vaciar Carrito</button>
              <h2 className="badge bg-dark boton">El Precio Total es= {precioTotal()} </h2>

            </>

          }

        </div>

        <div>
          <br/>
          <div>
            {listaproductos.length !== 0 && <CartForm datosForm={generarOrden} />}

          </div>
          <div>
            <br/>

            <ReturnMain />
          </div>

        </div>




      </div>



    </>


  )
}

export default CartList