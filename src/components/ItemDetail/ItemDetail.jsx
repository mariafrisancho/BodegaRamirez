
import './ItemDetail.css'
const ItemDetail = ({producto}) => {
  return (
    <div className="container-fluid margen">
     <div className='row align-items-start'>
      <div className='col'>
        <img className='img-thumbnai' src={producto.img}  />
      </div>
      <div className='col'>
        <h1>{producto.nombre}</h1>
        <h2>{producto.descripcion}</h2>
        <h3>PRECIO: s./ {producto.precio} </h3>
      </div>

    </div>
    </div>
  )
}

export default ItemDetail