import { useState } from 'react'

function ItemCount({inicial,stock, onAdd}) {
    const[cuenta,setCuenta]=useState(inicial)
    console.log("hola soy itemcount")
  
    
    function sumar() {
        if(cuenta<stock){
            setCuenta(cuenta+1) 
        
        }
    
    }
    function Restar() {
        if(cuenta>inicial){
            setCuenta(cuenta-1) 
        
        }  
    }


  return (

    <div>
    <button onClick={sumar} className="btn btn-primary">+</button>
    {cuenta}
    <button onClick={Restar} className="btn btn-primary">-</button>
    <button onClick={onAdd} className="btn btn-primary">Agregar al carrito</button>
 
    </div>
  )
}

export default ItemCount