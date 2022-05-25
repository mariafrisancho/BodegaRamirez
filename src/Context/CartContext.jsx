import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const[carList,setCarlist]=useState([])

    function addToCart(item){
        setCarlist([
            ...carList,item] //Spread agrega lo que hay en carlist + item
            )
    }
    const vaciarCarrito=()=>{
        setCarlist([])
    }

    return (
        <CartContext.Provider
        value={{
            carList,
            addToCart,
            vaciarCarrito
        }}
         >
            {children}
        </CartContext.Provider>

    )
}
export default CartContextProvider