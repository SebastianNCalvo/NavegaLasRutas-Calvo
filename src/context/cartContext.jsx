import { createContext, useState } from "react";
import products from "../data/productos";

const cartContext = createContext()

export function CartProvider(props){
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem){
        const newCartItems = structuredClone(cartItems)
        const isInCart = cartItems.some(item => item.id === newItem.id)

        if(isInCart){
            const index = cartItems.findIndex(item => item.id === newItem.id)
            newCartItems[index].cantidad+= newItem.cantidad
        } else {
            newCartItems.push({ ...newItem})
        }
        setCartItems(newCartItems)
        
    }

    function removeItem(idRemove){
        let newCartItems = structuredClone(cartItems)
        const isInCart = cartItems.find(item => item.id === idRemove)
        const countInCart = isInCart.cantidad

        if(countInCart > 1){
            const index = cartItems.findIndex(item => item.id === idRemove)
            newCartItems[index].cantidad--
        } else {
            newCartItems= cartItems.filter(item => item.id !== idRemove)
        }
        setCartItems(newCartItems)
    }

    function contarItemsCarrito(){
        let cantidadEnCarrito = 0
        cartItems.forEach(item => cantidadEnCarrito += item.cantidad)
        return cantidadEnCarrito
    }

    function calculateTotalPrice(){
        console.log(cartItems)
    }


    function clearCart(){
        setCartItems([])
    }

    
    return(
        <cartContext.Provider value={{cartItems, addToCart, contarItemsCarrito, removeItem, calculateTotalPrice, clearCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext