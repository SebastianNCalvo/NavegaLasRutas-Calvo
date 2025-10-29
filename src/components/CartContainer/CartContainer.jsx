import './CartContainer.css'
import { useContext, useState } from 'react'
import cartContext from '../../context/cartContext'
import { createOrder } from '../../data/firebase'
import FormCheackout from './FormCheckout'
import Swal from 'Sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function CartContainer(){
    const {cartItems, removeItem, clearCart} = useContext(cartContext)

    async function handleCheckout(formData){
        const orderData= {
            buyer: formData,
            items: cartItems,
            price: totalPrice,
            date: new Date()
        }

        const newOrder = await createOrder(orderData)
        Swal.fire({
            title: `Compra finalizada con exito! tu código de seguimiento es: ${newOrder.id}`,
            text: "Guardá el codigo proporcionado para poder seguir tu envio",
            icon: "success"
        })
        clearCart()
        return newOrder
    }

    const totalPrice = cartItems.reduce((acumulador, cartItem) => {
        return acumulador + (cartItem.price * cartItem.cantidad);
    }, 0)

    return(
        <div className='divCarrito'>
            {cartItems.length === 0 ? "Su carrito está vacio. Por favor agrege sus productos" : 
                <div>
                    <div className='divTitulos'>
                        <div className='divImagen'>
                            <p>Imagen</p>
                        </div>
                        <div className='divproducto'>
                            <p>Producto</p>
                        </div>
                        <div  className='divCantidad'>
                            <p>Cantidad</p>
                        </div>
                        <div  className='divTotal'>
                            <p>Total</p>
                        </div>
                        <div className='divBtn'>
                        </div>
                    </div>
                    {
                        cartItems.map(item =>
                            <div className='divTitulos' key={item.id}>
                                <div className='divImagen'>
                                    <img width={200} src={item.img}></img>
                                </div>
                                <div className='divproducto'>
                                    {item.title}
                                </div>
                                <div className='divCantidad'>
                                    <h4>{item.cantidad}</h4>
                                </div>
                                <div className='divTotal'>
                                    <h4>$ {item.price * item.cantidad} </h4>
                                </div>
                                <div className='divBtn'>
                                    <button className='btnEliminar' onClick={ ()=> removeItem(item.id) }> Eliminar </button>                                    
                                </div>
                                
                            </div>
                        )
                    }
                    
                    <h5>Total a pagar: $ {totalPrice}</h5>
                    <FormCheackout handleCheckout={handleCheckout}/>
                </div>
            }
        </div>
    )
}