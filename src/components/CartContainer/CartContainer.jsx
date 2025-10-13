import './CartContainer.css'
import { useContext } from 'react'
import cartContext from '../../context/cartContext'

export default function CartContainer(){
    const {cartItems, removeItem} = useContext(cartContext)
    
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
            {/* <button>Ir a pagar</button> */}
        </div>
    )
}