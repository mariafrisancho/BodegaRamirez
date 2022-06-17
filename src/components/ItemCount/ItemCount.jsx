import { useState } from 'react'

function ItemCount({ inicial, stock, onAdd }) {
    const [cuenta, setCuenta] = useState(inicial)

    function sumar() {
        if (cuenta < stock) {
            setCuenta(cuenta + 1)

        }

    }
    function Restar() {
        if (cuenta > inicial) {
            setCuenta(cuenta - 1)

        }
    }


    return (

        <div>
            <button onClick={sumar} className="btn btn-outline-primary btn-sm">+</button>
            {cuenta}
            <button onClick={Restar} className="btn btn-outline-primary  btn-sm">-</button>
            <br/>
       
            <button onClick={() => onAdd(cuenta)} className="btn btn-outline-primary btn-sm">Agregar al carrito</button>

        </div>
    )
}

export default ItemCount