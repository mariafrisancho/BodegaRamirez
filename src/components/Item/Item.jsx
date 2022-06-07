import { Link } from "react-router-dom"

export const Item = ({ product }) => {

  return (

    <div
      className='col-md-4'
    >

      <div className="card w-100 mt-5" >
        <div className="card-header">
          {`${product.nombre} - ${product.categoria}`}
        </div>
        <div className="card-body">
          <img src={product.img} alt='' className='w-50' />
          {product.precio}
        </div>
        <div className="card-footer">
      
          <Link to={`/detalle/${product.id}`}>

            <button className="btn btn-outline-primary btn-block">
              detalle del producto
            </button>
          </Link>
        </div>
      </div>

    </div>


  )
}

