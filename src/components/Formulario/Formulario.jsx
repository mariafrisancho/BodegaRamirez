import React from 'react'


function Formulario({ saludo,place }) {
  return (

    <div>
      <form>
    
        <input type="text" placeholder={place}/>
        <button onClick={saludo}>saludo</button>
      </form>

    </div>
  )
}

export default Formulario