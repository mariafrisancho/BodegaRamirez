import React from 'react'
// import Titulo from '../Titulo/Titulo'

function Formulario({ saludo,place }) {
  return (

    <div>
      <form>
        {/* <Titulo titulo='Soy titulo de input' subtit='Subtitulo de input' /> */}
        <input type="text" placeholder={place}/>
        <button onClick={saludo}>saludo</button>
      </form>

    </div>
  )
}

export default Formulario