
import React, { useState } from 'react'

function ItemCount({stock=3,initial=1}) {
    const[cuenta,setCuenta]=useState(1)
    
    function contar() {
        if(cuenta<stock){
            setCuenta(cuenta+1) 
        
        }
    
    }
    function disminuye() {
        if(cuenta>initial){
            setCuenta(cuenta-1) 
        
        }  
    }
    function agregaCarrito() {
     console.log({cuenta})
    }
  return (
    <div>
    <button onClick={contar}> + </button>
    <input type="text" value={cuenta}></input>
    <button onClick={disminuye}> - </button>
    <hr/>
    <button onClick={agregaCarrito}> AGREGAR AL CARRITO </button>
    </div>
  )
}

export default ItemCount