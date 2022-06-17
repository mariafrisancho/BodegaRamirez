import { useCartContext } from "../../Context/CartContext"
import CartList from "../CartList/CartList"
import ReturnMain from "../ReturnMain/ReturnMain"


const Cart = () => {
  const { carList } = useCartContext()


  return (
    <>

      {
        carList.length !== 0 ?
          <CartList listaproductos={carList} />
          :
          <ReturnMain vacio={0}/>

      }


    </>
  )
}
export default Cart