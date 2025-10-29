import './ButtonAddToCart.css'
import { useContext } from "react";
import cartContext from '../../context/cartContext';

export default function ButtonAddToCart(  ){
  const context = useContext(cartContext)

  return (
    <div className="button-cart">
      <button onClick={context.addToCart } >Agregar al carrito</button>
      <br/>
      <small> {statusInCart} </small>
    </div>
  )
}