import { Link } from "react-router-dom";
const ReturnMain = ({vacio}) => {
  return (
    <>
    {
    vacio == 0 &&<h2> No hay items en su carrito</h2>
    }
  
    <Link to='/' >
      <button  className="btn btn-primary btn-sm" 
      >Seguir comprando</button>
    </Link>
  </>
  )
}

export default ReturnMain