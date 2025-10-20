import './CartContainer.css'
import { useContext } from 'react'
import cartContext from '../../context/cartContext'
import { createOrder } from '../../data/firebase'

export default function CartContainer(){
    const {cartItems, removeItem, clearCart} = useContext(cartContext)
    
    async function handleCheckout(){
        const newOrder = await createOrder(orderData)
        alert(`Compra finalizada con exito! tu id es: ${newOrder.id}`)
        clearCart()
        return newOrder
    }
    return(
        <div className='divCarrito'>
            <table>
                <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                        <th>Precio Total</th>
                </tr>
                {
                    cartItems.map(item =>
                        <tr>
                            <th> <img width={200} src={item.img}></img> </th>
                            <th> {item.title} </th>
                            <th> {item.cantidad} </th>
                            <th> <button onClick={ ()=> removeItem(item.id) }> Eliminar </button></th>
                            <th> {item.price * item.cantidad} </th>
                        </tr>
                    )
                }

            </table>
            <button onClick={handleCheckout}>Ir a pagar</button>
        </div>
    )
}