import './ItemListContainer.css'
export const ItemListContainer = ({saludo='saludo'}) => {
  function saludoAlert(){
      alert('hola')
  }  
  return (
    <div>
        <h1>  {saludo} 
        <hr/>
        <button onClick={saludoAlert}>Click</button>
       </h1>
     </div>
  )
}
