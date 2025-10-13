import './ButtonAddToCart.css'
import { useState , useContext } from "react";
import cartContext from '../../context/cartContext';

export default function ButtonAddToCart(  ){
  let [statusInCart, setStatusInCart] = useState("No agregaste este item al carrito.")
  
  function handleClick(){
    alert("Gracias por agregarme al carrito") 
    setStatusInCart("Item agregado al carrito!🙂")

  }
  const context = useContext(cartContext)


  return (
    <div className="button-cart">
      <button onClick={context.addToCart } >Agregar al carrito</button>
      <br/>
      <small> {statusInCart} </small>

    </div>
  )
}