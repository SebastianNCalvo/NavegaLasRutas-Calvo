// * Estado de componentes
import './ButtonAddToCart.css'
import { useState } from "react";

export default function ButtonAddToCart(  ){
  let [statusInCart, setStatusInCart] = useState("No agregaste este item al carrito.")
  
  function handleClick(){
    alert("Gracias por agregarme al carrito") 
    setStatusInCart("Item agregado al carrito!🙂")
  }

  return (
    <div className="button-cart">
      <button onClick={ handleClick } > Agregar al carrito</button>
      <br/>
      <small> {statusInCart} </small>
    </div>
  )
}