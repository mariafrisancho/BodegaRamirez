import { useCartContext } from "../../Context/CartContext"
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'


const ComprarProductos = () => {

  return (
    <>
      <br />
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
  const [dataForm, setdataForm] = useState({ nombre: '', telefono: '', email: '' })



  async function generarOrden() {

    let orden = {}

    orden.buyer = dataForm


    orden.total = precioTotal()
    orden.items = carList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.nombre
      const precio = cartItem.subtotal


      return { id, nombre, precio }

    })
    console.log(orden)

    const db = getFirestore()
    const querycollection = collection(db, 'orders')
    addDoc(querycollection, orden)
      .then(respuesta => console.log(respuesta))
      .catch(error => console.log(error))
      .finally(() => vaciarCarrito())

    //Actualizar stock
    const queryCollecctionStock = collection(db, 'productos')
    const queryActualizarStock = query(
      queryCollecctionStock,
      where(documentId(), 'in', carList.map(it => it.id))
    )
    const batch = writeBatch(db)
    await getDocs(queryActualizarStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - carList.find(item => item.id == res.id).cantidad
      })))
      .finally(() => console.log('Actualizado'))
    batch.commit()


  }


  const handlerChange = (e) => {
    setdataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    }
    )
  }
  return (
    <>


      <div>
        <br />
        <center>


          {carList.map(product => <div key={product.id} >
            <span> {product.nombre} </span>
            <span className="badge bg-warning text-dark"> precio: {product.precio}</span>
            <span className="badge bg-primary"> Cantidad: {product.cantidad}</span>
            <span className="badge bg-dark"> Subtotal: {product.subtotal} </span>
            <button className="btn btn-info btn-delete" onClick={() => EliminarItem(product.id)}>X</button>

          </div>)}

          {

            precioTotal() !== 0 && <h2 className="badge bg-dark">El Precio Total es= {precioTotal()} </h2>


          }

    

        </center>

      </div>
      <div>

      </div>
      <div>
        <center>
        {
          precioTotal() !== 0 ?

            <button onClick={vaciarCarrito}>Vaciar Carrito</button>

            :
            <ComprarProductos />


        }

        </center>
     

      </div>
      <div>
        {
          carList.length !== 0 &&
          <center>

<br/>

            <h5>Datos del comprador</h5>
            <input
              className="form-comtrol"
              type='text'
              name='nombre'
              placeholder="Ingrese Nombre"
              value={dataForm.nombre}
              onChange={handlerChange}

            /><br />
            <input
              className="form-comtrol"
              type='text'
              name='telefono'
              placeholder="Ingrese Telefono"
              value={dataForm.telefono}
              onChange={handlerChange}

            /><br />
            <input
              className="form-comtrol"
              type='email'
              name='email'
              placeholder="Ingrese Email"
              value={dataForm.email}
              onChange={handlerChange}

            /><br /> <br />

            <button onClick={generarOrden}>Terminar Compra</button>




          </center>

        }

      </div>
      
    </>
  )
}
export default Cart