import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const[carList,setCarlist]=useState([])

    function addToCart(item){
        const index=carList.findIndex(product=>product.id===item.id)// si no esta -1
        if(index!==-1)
        {
          const cantidadVieja=carList[index].cantidad  
          const newCart=carList.filter(prod=>prod.id!==item.id)
          item.cantidad+=cantidadVieja
          carList[index].cantidad += cantidadVieja 
          setCarlist([...newCart,item]) 
         


        }
        else {
            setCarlist([
                ...carList,item] //Spread agrega lo que hay en carlist + item
                )

        }
       
    }
    const vaciarCarrito=()=>{
        setCarlist([])
    }
    const EliminarItem=(id)=>{
        setCarlist(carList.filter(prod=>prod.id!==id))

    }
    const cantidadTotal=()=>{
       return carList.reduce((contador,prod)=>contador += prod.cantidad ,0) 

    }
    const precioTotal=()=>{
        return carList.reduce((contador,prod)=>contador+(prod.cantidad*prod.precio) ,0) 

    }

    return (
        <CartContext.Provider
        value={{
            carList,
            addToCart,
            vaciarCarrito,
            EliminarItem,
            cantidadTotal,
            precioTotal

        }}
         >
            {children}
        </CartContext.Provider>

    )
}
export default CartContextProvider