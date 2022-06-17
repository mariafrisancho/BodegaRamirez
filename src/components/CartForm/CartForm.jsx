import React, { useState } from 'react'
import ReturnMain from '../ReturnMain/ReturnMain'
import '../CartForm/CartForm.css'

const CartForm = ({ datosForm }) => {

  const [dataForm, setdataForm] = useState({ nombre: '', telefono: '', email: '' })

  const handlerChange = (e) => {
    setdataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    }
    )
  }
  const enviarDatos = (event) => {
    event.preventDefault()

  }


  return (
    <>

    
      <form onSubmit={enviarDatos}>
        <h5>Ingrese sus datos </h5>

        <div class="row mb-3">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Nombre:</label>
          <div class="col-sm-10">
            <input
              className="form-comtrol"
              type='text'
              name='nombre'
              placeholder="Ingrese Nombre"
              value={dataForm.nombre}
              onChange={handlerChange}

            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Telefono:</label>
          <div class="col-sm-10">
          <input
          className="form-comtrol"
          type='text'
          name='telefono'
          placeholder="Ingrese Telefono"
          value={dataForm.telefono}
          onChange={handlerChange}

        />
          </div>
        </div>
        <div class="row mb-3">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email:</label>
          <div class="col-sm-10">
          <input
          className="form-comtrol"
          type='email'
          name='email'
          placeholder="Ingrese Email"
          value={dataForm.email}
          onChange={handlerChange}

        />
          </div>
        </div>



        <button onClick={() => datosForm(dataForm)} className="btn btn-primary btn-sm">Terminar Compra</button>



      </form>

    </>
  )
}

export default CartForm