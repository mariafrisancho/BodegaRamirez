import React ,{createContext,useState}from 'react'

export const  CartContext=createContext();

/* Defino mi componente cart*/
const CartProvider=(props)=>{
    /*metodos o funciones */
    const[cart,setcart]=useState([])
    //Funcion añadir producto al carrito
    const addToCart=(item,cantidad)=>{
        const newItem = { ...item, cantidad }
        setcart([...cart, newItem])
    }
    return(
        <CartContext.Provider value={{cart, addToCart}}>
            
            {props.children}

        </CartContext.Provider>
    )

}
export default CartProvider;