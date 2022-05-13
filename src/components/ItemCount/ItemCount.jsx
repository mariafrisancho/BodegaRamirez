
import React, { useState } from 'react'

function ItemCount({stock,initial,onAdd}) {
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
  const agregaCarrito=()=>{onAdd=console.log(cuenta)}
  return (

    <div>
     <section className='count'>
      <ul className='count__list'>
        <li><button type='button' onClick={disminuye}>-</button></li>
        <li>{cuenta}</li>
        <li><button type='button' onClick={contar}>+</button></li>
      </ul>
      <button
        type='submit'
        className='count__button'
        value={cuenta}
        onClick = { agregaCarrito }
      >
        AGREGAR AL CARRITO
      </button>
    </section>
  {/*   <button onClick={contar}> + </button>
    <p><span>value={cuenta}</span></p>
    <input type="text" value={cuenta}></input>
    <button onClick={disminuye}> - </button>
    <hr/>
    <button onClick={agregaCarrito}> AGREGAR AL CARRITO </button> */}
    </div>
  )
}

export default ItemCount